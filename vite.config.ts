import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
  const plugins = [vinext()];

  if (process.env.VERCEL) {
    const { nitro } = await import('nitro/vite');
    plugins.push(nitro() as ReturnType<typeof vinext>);
  }

  return {
    css: { postcss: { plugins: [tailwindcss()] } },
    plugins,
  };
});
