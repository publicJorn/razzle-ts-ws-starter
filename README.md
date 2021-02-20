# Razzle TypeScript Websocket starter

A starter targeted for small universal apps that also need websocket support.

Also includes:

- eslint with standard and prettier
- custom babelrc allows omitting `import React from 'react'`
- styled-components
- reloading is still hot

## Using vscode?

Install the eslint extension and create file in root `.vscode/settings.json` with:

```json
{
  "eslint.workingDirectories": [
    "./",
  ],
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

## Thanks

- jaredpalmer for Razzle
- cskeogh for Socket io with HMR support came from here: [https://github.com/jaredpalmer/razzle/issues/677#issuecomment-739851260]()
