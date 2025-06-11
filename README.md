# vite-corex-css

A minimal Vite starter template for using [Corex](https://github.com/netoum/corex) with plain CSS. This template helps you get up and running quickly with a Corex-powered design system using just `npx degit`.

## 🚀 Quick Start

To scaffold a new Corex project using this template:

```bash
npx degit netoum/vite-corex-css my-corex-app
cd my-corex-app
npm install
npm run dev
```
## 🚀 Site search
To use the site Search Component you will need to index the site

```bash
npm run build
npm install -D pagefind
npx pagefind --site "dist"
npm run dev
```

You can then set Pagefind in your main ts
```ts
import { initializeSiteSearch } from "@netoum/corex/components/site-search";
(async () => {
try {
// @ts-ignore
const pagefind = await import("../dist/pagefind/pagefind.js");
await pagefind.options({
bundlePath: "../dist/pagefind/pagefind.js",
baseUrl: "/",
});
await pagefind.init();
console.log("Pagefind initialized");
initializeSiteSearch(pagefind);
} catch (error) {
console.error("Failed to initialize Pagefind:", error);
}
})();
```
