import { cn } from './utils.mjs'
import { it, expect, describe } from 'vitest'

describe('cn', () => {
  // Returns a string with the merged class names from the inputs.
  it('should return a string with merged class names', () => {
    const result = cn('class1', 'class2')
    expect(typeof result).toBe('string')
    expect(result).toContain('class1')
    expect(result).toContain('class2')
  })

  // Handles inputs with circular references.
  it('should handle inputs with circular references', () => {
    const obj = {}
    obj.circularRef = obj
    const result = cn('class1', obj)

    expect(typeof result).toBe('string')
    expect(result).toContain('class1')
    expect(result).toContain('circularRef')
  })
})
