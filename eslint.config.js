import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx,mts,mjs,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    // settings: {
    //   react: {
    //     version: 'detect' // Automatically detect React version
    //   },
    //   'import/resolver': {
    //     typescript: {} // Use TypeScript paths from tsconfig.json
    //   }
    // },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [ 'warn', { allowConstantExport: true }, ],
      '@typescript-eslint/no-unused-vars': 'off', //REM: Is this properly set up?
      '@typescript-eslint/no-namespace': 'off', //REM: Is this properly set up?
    },
  },
)
