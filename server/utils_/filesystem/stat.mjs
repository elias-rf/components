import fs from 'fs/promises'
import { bytesToSize } from '../../utils/filesystem/bytes-to-size.mjs'

export async function stat(file) {
  const stats = await fs.stat(file)
  const fileSizeInBytes = stats.size
  const humanReadableFileSize = bytesToSize(fileSizeInBytes)
  const lastmodifiedTime = stats.mtime
  return {
    hsize: humanReadableFileSize,
    size: fileSizeInBytes,
    mtime: lastmodifiedTime,
  }
}
