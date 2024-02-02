import { Button } from '@/client/components/button/button.js'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

describe('Button', () => {
  test('deve mostrar label', () => {
    render(<Button>Content</Button>)
    expect(screen.getByText('Content')).toBeDefined()
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
    expect(screen.getByText('Content')).toBeDefined()
    expect(clicked).toBe(true)
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
    expect(screen.getByText('Content')).toBeDefined()
    expect(clicked).toBe(false)
  })
})
