import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

function rehypeWrapTable() {
  return (tree) => {
    function visit(node) {
      if (!node || !Array.isArray(node.children)) return;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (child && child.type === 'element' && child.tagName === 'table') {
          node.children[i] = {
            type: 'element',
            tagName: 'div',
            properties: {
              className: ['overflow-x-auto', 'max-w-full', 'my-6'],
              style: 'overflow-x: auto; max-width: 100%; display: block; -webkit-overflow-scrolling: touch;'
            },
            children: [child]
          };
        } else if (child) {
          visit(child);
        }
      }
    }
    visit(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://gensetora.com',
  integrations: [tailwind(), sitemap()],
  markdown: {
    rehypePlugins: [rehypeWrapTable]
  },
  server: {
    port: 4322,
    host: true
  }
});
