import { describe, expect, test } from 'vitest'
import { formButtonStatus } from './form-button-status.mjs'

describe('formStatus', () => {
  test('get view', () => {
    expect(formButtonStatus('view')).toEqual({
      editDisabled: false,
      createDisabled: false,
      delDisabled: false,
      saveDisabled: true,
      cancelDisabled: true,
      formDisabled: true,
    })
  })
  test('get edit', () => {
    expect(formButtonStatus('edit')).toEqual({
      editDisabled: true,
      createDisabled: false,
      delDisabled: true,
      saveDisabled: false,
      cancelDisabled: false,
      formDisabled: false,
    })
  })
  test('get new', () => {
    expect(formButtonStatus('new')).toEqual({
      editDisabled: true,
      createDisabled: false,
      delDisabled: true,
      saveDisabled: false,
      cancelDisabled: false,
      formDisabled: false,
    })
  })
  test('get none', () => {
    expect(formButtonStatus('none')).toEqual({
      editDisabled: true,
      createDisabled: false,
      delDisabled: true,
      saveDisabled: true,
      cancelDisabled: true,
      formDisabled: true,
    })
  })
})
