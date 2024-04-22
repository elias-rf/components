import { now } from '@/utils/date/now.js'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('@/utils/date/now.js', async (importOriginal) => {
  const mod = await importOriginal<typeof import('@/utils/date/now.js')>()
  return {
    ...mod,
    // replace some exports
    now: vi.fn(() => new Date(2000, 1, 1, 2)),
  }
})

const businessHours = [9, 17]

function purchase() {
  const currentHour = now().getHours()

  const [open, close] = businessHours

  if (currentHour > open && currentHour < close) return { message: 'Success' }

  return { message: 'Error' }
}

describe('purchasing flow', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers()
  })

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers()
  })

  it('allows purchases within business hours', () => {
    // set hour within business hours
    const date = new Date(2000, 1, 1, 13)
    vi.mocked(now).mockReturnValueOnce(date)

    // access Date.now() will result in the date set above
    expect(purchase()).toEqual({ message: 'Success' })
  })

  it('disallows purchases outside of business hours', () => {
    // set hour outside business hours
    const date = new Date(2000, 1, 1, 19)
    vi.mocked(now).mockReturnValueOnce(date)

    // access Date.now() will result in the date set above
    expect(purchase()).toEqual({ message: 'Error' })
  })
})
