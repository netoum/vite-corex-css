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
        code: resolve(__dirname, 'code.html'),
        collapsible: resolve(__dirname, 'collapsible.html'),
        combobox: resolve(__dirname, 'combobox.html'),
        'date-picker': resolve(__dirname, 'date-picker.html'),
        dialog: resolve(__dirname, 'dialog.html'),
        link: resolve(__dirname, 'link.html'),
        listbox: resolve(__dirname, 'listbox.html'),
        menu: resolve(__dirname, 'menu.html'),
        scrollbar: resolve(__dirname, 'scrollbar.html'),
        'site-search': resolve(__dirname, 'site-search.html'),
        switch: resolve(__dirname, 'switch.html'),
        switcher: resolve(__dirname, 'switcher.html'),
        tabs: resolve(__dirname, 'tabs.html'),
        timer: resolve(__dirname, 'timer.html'),
        'toggle-group': resolve(__dirname, 'toggle-group.html'),
        'tree-view': resolve(__dirname, 'tree-view.html'),
        typo: resolve(__dirname, 'typo.html')
      },
    },
  }
})