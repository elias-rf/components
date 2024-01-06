import { Title } from '@/client/components/ui-old/title.js'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button.js'

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Button text',
    size: 'default',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (props) => (
    <>
      <Title>Button</Title>
      <Button {...props} />

      <Title>size</Title>
      <div className="flex flex-col space-y-2">
        <Button size={'default'}>default</Button>
        <Button size={'sm'}>sm</Button>
        <Button size={'lg'}>lg</Button>
        <Button size={'icon'}>icon</Button>
      </div>
      <Title>variant</Title>
      <div className="flex flex-row space-x-2">
        <Button variant={'default'}>default</Button>
        <Button variant={'destructive'}>destructive</Button>
        <Button variant={'outline'}>outline</Button>
        <Button variant={'secondary'}>secondary</Button>
        <Button variant={'ghost'}>ghost</Button>
        <Button variant={'link'}>link</Button>
      </div>
      <Title>disabled</Title>
      <div className="flex flex-row space-x-2">
        <Button
          disabled
          variant={'default'}
        >
          default
        </Button>
        <Button
          disabled
          variant={'destructive'}
        >
          destructive
        </Button>
        <Button
          disabled
          variant={'outline'}
        >
          outline
        </Button>
        <Button
          disabled
          variant={'secondary'}
        >
          secondary
        </Button>
        <Button
          disabled
          variant={'ghost'}
        >
          ghost
        </Button>
        <Button
          disabled
          variant={'link'}
        >
          link
        </Button>
      </div>
    </>
  ),
}
