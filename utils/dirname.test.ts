import { __dirname, __filename, __filenameRelative } from '@/utils/dirname'
import { describe, expect, test } from 'vitest'

describe('dirname', () => {
  test('filename', () => {
    expect(__filename(import.meta.url)).toBe(
      '/Users/eliasribeiro/dev/github.com/elias-rf/intranet/utils/dirname.test.ts'
    )

    expect(__filenameRelative(import.meta.url)).toBe('utils/dirname.test.ts')
    expect(__dirname(import.meta.url)).toBe(
      '/Users/eliasribeiro/dev/github.com/elias-rf/intranet/utils'
    )
  })
})
