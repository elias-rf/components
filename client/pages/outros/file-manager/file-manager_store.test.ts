import { createRecord, fetcherMock, uid } from '@/utils/mocks/fetcher-mock.js'
import { mockedFetch } from '@/utils/mocks/mocked-fetch/mocked-fetch.js'

import { fakerPT_BR as faker } from '@faker-js/faker'
import { describe, expect, test } from 'vitest'
import { fileManagerStore } from './file-manager_store.js'

mockedFetch.reset()
mockedFetch.add(async (request: any) => {
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
    expect(fileManagerStore.state.path).toEqual('')
    expect(fileManagerStore.state.dirList).toEqual([])
    expect(fileManagerStore.state.fileList).toEqual([])
    expect(fileManagerStore.state.stat).toEqual({})
  })

  test('fetchList', async () => {
    const dir = await fileManagerStore.fetchDir()
    expect(dir).toEqual({
      dir: ['dir1', 'dir2'],
      file: ['file1', 'file2'],
    })
    expect(fileManagerStore.state.dirList).toEqual(['dir1', 'dir2'])
    expect(fileManagerStore.state.fileList).toEqual(['file1', 'file2'])
  })
  test('fetchRecord', async () => {
    const agenda = await fileManagerStore.fetchStat()
    expect(agenda).toEqual({
      hsize: '0 B',
      size: 0,
      mtime: '2020-01-01T00:00:00.000Z',
    })
  })
})
