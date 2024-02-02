import { prettyDOM } from '@testing-library/dom'
import fs from 'node:fs'
// screen.debug(undefined, Infinity)

export function saveDebug(fileName: string) {
  const html = `<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
  ${prettyDOM(undefined, Infinity, { highlight: false }) || ''}
</html>`

  fs.writeFileSync(fileName, html)
}
