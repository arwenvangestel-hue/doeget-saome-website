import fs from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { build } from 'vite';

await build();
await build({ build: { ssr: 'src/App.jsx', outDir: '.seo-ssr', emptyOutDir: true, rollupOptions: { output: { entryFileNames: 'app.mjs' } } } });
const { default: App } = await import(pathToFileURL(path.resolve('.seo-ssr/app.mjs')).href);
const file = 'dist/index.html';
const html = await fs.readFile(file, 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('Expected empty React root before prerender');
await fs.writeFile(file, html.replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App))}</div>`));
await fs.rm('.seo-ssr', { recursive: true, force: true });
console.log('Public homepage prerendered with the same React component');
