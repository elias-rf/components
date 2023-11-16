import { dirname, filename, filenameRelative } from '@/utils/dirname'
import { describe, expect, test } from 'vitest'

describe('dirname', () => {
  test('filename', () => {
    expect(filename(import.meta.url)).toBe(
      '/Users/eliasribeiro/dev/github.com/elias-rf/intranet/utils/dirname.test.ts'
    )

    expect(filenameRelative(import.meta.url)).toBe('utils/dirname.test.ts')
    expect(dirname(import.meta.url)).toBe(
      '/Users/eliasribeiro/dev/github.com/elias-rf/intranet/utils'
    )
  })
})
