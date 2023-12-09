import { bytesToSize } from '@/utils/filesystem/bytes-to-size.js'
import fs from 'fs/promises'

export async function stat(file: string) {
  console.log(`🚀 ~ file: stat.ts:6 ~ stat ~ file:`, file)

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
