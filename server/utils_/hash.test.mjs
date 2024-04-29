import { expect, it } from 'vitest'
import { hash } from './hash.mjs'

it('md5 abc', async () => {
  expect(await hash('abc', 'md5')).toBe('900150983cd24fb0d6963f7d28e17f72')
  expect(await hash('abc', 'sha256')).toBe(
    'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad'
  )
})

it('md5 123', async () => {
  expect(await hash('123', 'md5')).toBe('202cb962ac59075b964b07152d234b70')
  expect(await hash('123', 'sha256')).toBe(
    'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
  )
})
