import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import { Slot, Slottable } from './slot.jsx'

describe('given a slotted Trigger', () => {
  describe('with onClick on itself', () => {
    const handleClick = vi.fn()

    beforeEach(() => {
      handleClick.mockReset()
      render(
        // @ts-ignore
        <Trigger
          as={Slot}
          onClick={handleClick}
        >
          <button type="button">Click me</button>
        </Trigger>
      )
      fireEvent.click(screen.getByRole('button'))
    })

    test('should call the onClick passed to the Trigger', async () => {
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('with onClick on the child', () => {
    const handleClick = vi.fn()

    beforeEach(() => {
      handleClick.mockReset()
      render(
        // @ts-ignore
        <Trigger as={Slot}>
          <button
            type="button"
            onClick={handleClick}
          >
            Click me
          </button>
        </Trigger>
      )
      fireEvent.click(screen.getByRole('button'))
    })

    test("should call the child's onClick", async () => {
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('with onClick on itself AND the child', () => {
    const handleTriggerClick = vi.fn()
    const handleChildClick = vi.fn()

    beforeEach(() => {
      handleTriggerClick.mockReset()
      handleChildClick.mockReset()
      render(
        // @ts-ignore
        <Trigger
          as={Slot}
          onClick={handleTriggerClick}
        >
          <button
            type="button"
            onClick={handleChildClick}
          >
            Click me
          </button>
        </Trigger>
      )
      fireEvent.click(screen.getByRole('button'))
    })

    test("should call the Trigger's onClick", async () => {
      expect(handleTriggerClick).toHaveBeenCalledTimes(1)
    })

    test("should call the child's onClick", async () => {
      expect(handleChildClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('with onClick on itself AND undefined onClick on the child', () => {
    const handleTriggerClick = vi.fn()

    beforeEach(() => {
      handleTriggerClick.mockReset()
      render(
        // @ts-ignore
        <Trigger
          as={Slot}
          onClick={handleTriggerClick}
        >
          <button
            type="button"
            onClick={undefined}
          >
            Click me
          </button>
        </Trigger>
      )
      fireEvent.click(screen.getByRole('button'))
    })

    test("should call the Trigger's onClick", async () => {
      expect(handleTriggerClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('with undefined onClick on itself AND onClick on the child', () => {
    const handleChildClick = vi.fn()

    beforeEach(() => {
      handleChildClick.mockReset()
      render(
        // @ts-ignore
        <Trigger
          as={Slot}
          onClick={undefined}
        >
          <button
            type="button"
            onClick={handleChildClick}
          >
            Click me
          </button>
        </Trigger>
      )
      fireEvent.click(screen.getByRole('button'))
    })

    test("should call the child's onClick", async () => {
      expect(handleChildClick).toHaveBeenCalledTimes(1)
    })
  })
})

describe('given a Button with Slottable', () => {
  describe('without asChild', () => {
    test('should render a button with icon on the left/right', async () => {
      const tree = render(
        <Button
          iconLeft={<span>left</span>}
          iconRight={<span>right</span>}
        >
          Button <em>text</em>
        </Button>
      )

      expect(tree.container).toMatchSnapshot()
    })
  })

  describe('with asChild', () => {
    test('should render a link with icon on the left/right', async () => {
      const tree = render(
        <Button
          iconLeft={<span>left</span>}
          iconRight={<span>right</span>}
          asChild
        >
          <a href="https://radix-ui.com">
            Button <em>text</em>
          </a>
        </Button>
      )

      expect(tree.container).toMatchSnapshot()
    })
  })
})

/**
 * A React component that renders a trigger element, which can be a button or any other HTML element.
 *
 * @param {Object} props - The props for the trigger component.
 * @param {React.ElementType} [props.as='button'] - The HTML element to use as the trigger. Defaults to 'button'.
 * @param {*} [props.props] - Any additional props to pass to the trigger element.
 * @returns {React.ReactElement} - The rendered trigger element.
 */
const Trigger = ({ as: Comp = 'button', ...props }) => <Comp {...props} />

/**
 * @typedef {Object} ButtonProps
 * @extends {React.HTMLAttributes<HTMLButtonElement>}
 */

/**
 * @type {React.FC<ButtonProps>}
 */
const Button = React.forwardRef(
  (
    { children, asChild = false, iconLeft, iconRight, ...props },
    forwardedRef
  ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        {...props}
        ref={forwardedRef}
      >
        {iconLeft}
        <Slottable>{children}</Slottable>
        {iconRight}
      </Comp>
    )
  }
)

Button.displayName = 'Button'
