import { defineConfig } from 'vite'
import { resolve } from 'path';export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        accordion: resolve(__dirname, 'accordion.html'),
        avatar: resolve(__dirname, 'avatar.html'),
        badge: resolve(__dirname, 'badge.html'),
        button: resolve(__dirname, 'button.html'),
        checkbox: resolve(__dirname, 'checkbox.html'),
        clipboard: resolve(__dirname, 'clipboard.html'),
        collapsible: resolve(__dirname, 'collapsible.html'),
        dialog: resolve(__dirname, 'dialog.html'),
        link: resolve(__dirname, 'link.html'),
        listbox: resolve(__dirname, 'listbox.html'),
        menu: resolve(__dirname, 'menu.html'),
        switch: resolve(__dirname, 'switch.html'),
        switcher: resolve(__dirname, 'switcher.html'),
        tabs: resolve(__dirname, 'tabs.html'),
        'toggle-group': resolve(__dirname, 'toggle-group.html'),
        'tree-view': resolve(__dirname, 'tree-view.html'),
      },
    },
  }
})