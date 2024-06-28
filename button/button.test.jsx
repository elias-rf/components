import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { afterEach, assert, beforeEach, describe, test } from 'vitest'
import { Button } from './button.jsx'

describe('Button', () => {
  test('deve mostrar label', () => {
    render(<Button>Content</Button>)
    assert.deepEqual(screen.getByText('Content')).toBeDefined()
  })

  test('deve aceitar click', () => {
    let clicked = false
    render(
      <Button
        onClick={() => {
          clicked = true
        }}
      >
        Content
      </Button>
    )

    const title = screen.getByText('Content')
    fireEvent.click(title)
    assert.deepEqual(screen.getByText('Content')).toBeDefined()
    assert.deepEqual(clicked).toBe(true)
  })
  test('deve recusar click on disabled', () => {
    let clicked = false
    render(
      <Button
        disabled
        onClick={() => {
          clicked = true
        }}
      >
        Content
      </Button>
    )
    const title = screen.getByText('Content')
    fireEvent.click(title)
    assert.deepEqual(screen.getByText('Content')).toBeDefined()
    assert.deepEqual(clicked).toBe(false)
  })
})
