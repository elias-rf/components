import { mockedFetch } from '../../../../utils/mocks/mocked-fetch/mocked-fetch.mjs'

import { describe, expect, test } from 'vitest'
import { fileManagerStore } from './file-manager_store.mjs'

mockedFetch.reset()
mockedFetch.add(async (request) => {
  const body = JSON.parse(request.options?.body)

  switch (body.method) {
    case 'fileManager_dir':
      return {
        body: {
          id: body.id,
          result: {
            dir: ['dir1', 'dir2'],
            file: ['file1', 'file2'],
          },
        },
      }
    case 'fileManager_stat':
      return {
        body: {
          id: body.id,
          result: {
            hsize: '0 B',
            size: 0,
            mtime: '2020-01-01T00:00:00.000Z',
          },
        },
      }
    default:
      return {
        body: {
          id: body.id,
          result: [],
        },
      }
  }
})

describe('usefileManager', () => {
  test('inital values', () => {
    expect(fileManagerStore.state.getState().path).toEqual('')
  })
})
