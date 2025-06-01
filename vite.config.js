import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlFiles = readdirSync(__dirname).filter(file => file.endsWith('.html'));

const input = htmlFiles.reduce((entries, file) => {
  const name = path.basename(file, '.html');
  entries[name] = resolve(__dirname, file);
  return entries;
}, {});

export default defineConfig({
  build: {
    cssMinify: false,
    rollupOptions: {
      input,
    },
  },
});
