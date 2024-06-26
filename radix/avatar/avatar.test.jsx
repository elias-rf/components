import { render } from '@testing-library/react'
import { afterAll, beforeAll, beforeEach, describe, expect, test } from 'vitest'
import * as Avatar from './avatar.jsx'

const ROOT_TEST_ID = 'avatar-root'
const FALLBACK_TEXT = 'AB'
const IMAGE_ALT_TEXT = 'Fake Avatar'
const DELAY = 300

describe('given an Avatar with fallback and a working image', () => {
  let rendered
  let image = null
  const orignalGlobalImage = window.Image

  beforeAll(() => {
    // @ts-ignore
    window.Image = class MockImage {
      onload = () => {}
      src = ''
      constructor() {
        setTimeout(() => {
          this.onload()
        }, DELAY)
        return this
      }
    }
  })

  afterAll(() => {
    window.Image = orignalGlobalImage
  })

  beforeEach(() => {
    rendered = render(
      <Avatar.Root data-testid={ROOT_TEST_ID}>
        <Avatar.Fallback>{FALLBACK_TEXT}</Avatar.Fallback>
        <Avatar.Image
          src="/test.jpg"
          alt={IMAGE_ALT_TEXT}
        />
      </Avatar.Root>
    )
  })

  test('should render the fallback initially', () => {
    const fallback = rendered.queryByText(FALLBACK_TEXT)
    expect(fallback).toBeInTheDocument()
  })

  test('should not render the image initially', () => {
    image = rendered.queryByRole('img')
    expect(image).not.toBeInTheDocument()
  })

  test('should render the image after it has loaded', async () => {
    image = await rendered.findByRole('img')
    expect(image).toBeInTheDocument()
  })

  test('should have alt text on the image', async () => {
    image = await rendered.findByAltText(IMAGE_ALT_TEXT)
    expect(image).toBeInTheDocument()
  })
})

describe('given an Avatar with fallback and delayed render', () => {
  let rendered
  let fallback

  beforeEach(() => {
    rendered = render(
      <Avatar.Root data-testid={ROOT_TEST_ID}>
        <Avatar.Fallback delayMs={DELAY}>{FALLBACK_TEXT}</Avatar.Fallback>
      </Avatar.Root>
    )
  })

  test('should not render a fallback immediately', () => {
    fallback = rendered.queryByText(FALLBACK_TEXT)
    expect(fallback).not.toBeInTheDocument()
  })

  test('should render a fallback after the delay', async () => {
    fallback = rendered.queryByText(FALLBACK_TEXT)
    expect(fallback).not.toBeInTheDocument()
    fallback = await rendered.findByText(FALLBACK_TEXT)
    expect(fallback).toBeInTheDocument()
  })
})
