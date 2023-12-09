import { readdir } from 'fs/promises'

// import path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

type TDirList = {
  dir: { name: string }[]
  file: { name: string }[]
}

export async function dir(pth: string) {
  const response = (await readdir(pth, { withFileTypes: true })).reduce(
    (acc, dirent) => {
      if (dirent.isDirectory()) {
        acc.dir.push({
          name: dirent.name,
        })
      }
      if (dirent.isFile()) {
        acc.file.push({
          name: dirent.name,
        })
      }
      return acc
    },
    { dir: [], file: [] } as TDirList
  )

  return response
}
