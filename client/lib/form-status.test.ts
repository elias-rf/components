import { describe, expect, test } from 'vitest'
import { formStatus } from './form-status'

describe('formStatus', () => {
  test('get view', () => {
    expect(formStatus('view')).toEqual({
      status: 'view',
      editDisabled: false,
      createDisabled: false,
      delDisabled: false,
      saveDisabled: true,
      cancelDisabled: true,
      formDisabled: true,
    })
  })
  test('get edit', () => {
    expect(formStatus('edit')).toEqual({
      status: 'edit',
      editDisabled: true,
      createDisabled: false,
      delDisabled: true,
      saveDisabled: false,
      cancelDisabled: false,
      formDisabled: false,
    })
  })
  test('get new', () => {
    expect(formStatus('new')).toEqual({
      status: 'new',
      editDisabled: true,
      createDisabled: false,
      delDisabled: true,
      saveDisabled: false,
      cancelDisabled: false,
      formDisabled: false,
    })
  })
  test('get none', () => {
    expect(formStatus('none')).toEqual({
      status: 'none',
      editDisabled: true,
      createDisabled: false,
      delDisabled: true,
      saveDisabled: true,
      cancelDisabled: true,
      formDisabled: true,
    })
  })
})
