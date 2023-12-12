import { createRecord, fetcherMock, uid } from '@/mocks/fetcher-mock.js'
import { mockedFetch } from '@/mocks/mocked-fetch/mocked-fetch.js'

import { fakerPT_BR as faker } from '@faker-js/faker'
import { describe, expect, test } from 'vitest'
import { fileManagerStore } from './file-manager_store.js'

mockedFetch.clear()
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
    expect(fileManagerStore.getState().path).toEqual('')
    expect(fileManagerStore.getState().dirList).toEqual([])
    expect(fileManagerStore.getState().fileList).toEqual([])
    expect(fileManagerStore.getState().stat).toEqual({})
  })

  test('fetchList', async () => {
    const dir = await fileManagerStore.getState().fetchDir()
    expect(dir).toEqual({
      dir: ['dir1', 'dir2'],
      file: ['file1', 'file2'],
    })
    expect(fileManagerStore.getState().dirList).toEqual(['dir1', 'dir2'])
    expect(fileManagerStore.getState().fileList).toEqual(['file1', 'file2'])
  })
  test('fetchRecord', async () => {
    const agenda = await fileManagerStore.getState().fetchStat()
    expect(agenda).toEqual({
      hsize: '0 B',
      size: 0,
      mtime: '2020-01-01T00:00:00.000Z',
    })
  })
})
