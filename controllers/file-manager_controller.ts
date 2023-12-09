import { config } from '@/config/index.js'
import { dir as fsdir } from '@/utils/filesystem/dir.js'
import { stat as fsstat } from '@/utils/filesystem/stat.js'
import pth from 'node:path'

const roots = config.fs.roots

function dir({ path }: { path: string }) {
  if (path === '/' || path === '') {
    return { dir: Object.keys(roots).map((key) => ({ name: key })), file: [] }
  }

  if (path in roots) {
    return fsdir(roots[path as keyof typeof roots])
  }

  for (const root in roots) {
    if (path.startsWith(root)) {
      path = path.replace(root, roots[root as keyof typeof roots])
      return fsdir(path)
    }
  }

  return { dir: [], file: [] }
}

dir.rpc = true

function stat({ path, name }: { path: string; name: string }) {
  for (const root in roots) {
    if (path.startsWith(root)) {
      path = path.replace(root, roots[root as keyof typeof roots])
      return fsstat(pth.join(path, name))
    }
  }
  return {} as {
    hsize: string
    size: number
    mtime: string
  }
}

stat.rpc = true

export const fileManagerController = { dir, stat }
