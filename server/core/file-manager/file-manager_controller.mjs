import pth from 'node:path'
import { config } from '../../config/index.mjs'
import { dir as fsdir } from '../../utils/filesystem/dir.mjs'
import { stat as fsstat } from '../../utils/filesystem/stat.mjs'

const roots = config.fs.roots

function fileManager_dir({ path }) {
  if (path === '/' || path === '') {
    return { dir: Object.keys(roots).map((key) => ({ name: key })), file: [] }
  }

  if (path in roots) {
    return fsdir(roots[path])
  }

  for (const root in roots) {
    if (path.startsWith(root)) {
      path = path.replace(root, roots[root])
      return fsdir(path)
    }
  }

  return { dir: [], file: [] }
}

function fileManager_stat({ path, name }) {
  for (const root in roots) {
    if (path.startsWith(root)) {
      path = path.replace(root, roots[root])
      return fsstat(pth.join(path, name))
    }
  }
  return {}
}

export const fileManagerController = { fileManager_dir, fileManager_stat }
