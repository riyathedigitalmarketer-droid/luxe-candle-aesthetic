import fs from 'fs';
import path from 'path';

const outDir = '.vercel/output';

// Clean old
if (fs.existsSync(outDir)) {
  fs.rmSync(outDir, { recursive: true, force: true });
}

// Create directories
fs.mkdirSync(`${outDir}/static`, { recursive: true });
fs.mkdirSync(`${outDir}/functions/index.func`, { recursive: true });

// Write Vercel routing config
fs.writeFileSync(`${outDir}/config.json`, JSON.stringify({
  version: 3,
  routes: [
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/" }
  ]
}, null, 2));

// Copy client static assets
fs.cpSync('dist/client', `${outDir}/static`, { recursive: true });

// Copy server bundle to the edge function directory
fs.cpSync('dist/server', `${outDir}/functions/index.func`, { recursive: true });

// Write Edge function config
fs.writeFileSync(`${outDir}/functions/index.func/.vc-config.json`, JSON.stringify({
  runtime: "edge",
  entrypoint: "index.js"
}, null, 2));

// Write Edge function entry point wrapping the TanStack Server
fs.writeFileSync(`${outDir}/functions/index.func/index.js`, `
import server from "./server.js";
export default async function(request, event) {
  return server.fetch(request, process.env, event);
}
`);

console.log("Vercel Build Output generated successfully!");
