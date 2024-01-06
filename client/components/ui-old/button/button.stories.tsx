import {
  Button,
  TButtonProps,
} from '@/client/components/ui-old/button/button.js'
import { Title } from '@/client/components/ui-old/title.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Button text',
    size: 'md',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (props: TButtonProps) => (
    <>
      <Title>Button</Title>
      <Title>size</Title>
      <div className="flex flex-col space-y-2">
        <Button size={'xs'}>xs</Button>
        <Button size={'sm'}>sm</Button>
        <Button size={'md'}>md</Button>
        <Button size={'lg'}>lg</Button>
        <Button size={'xl'}>xl</Button>
      </div>
      <Title>color</Title>
      <div className="flex flex-row space-x-2">
        <Button color={'default'}>default</Button>
        <Button color={'primary'}>primary</Button>
        <Button color={'success'}>success</Button>
        <Button color={'info'}>info</Button>
        <Button color={'warning'}>warning</Button>
        <Button color={'danger'}>danger</Button>
        <Button color={'link'}>link</Button>
      </div>
      <Title>disabled</Title>
      <div className="flex flex-row space-x-2">
        <Button
          disabled
          color={'default'}
        >
          default
        </Button>
        <Button
          disabled
          color={'primary'}
        >
          primary
        </Button>
        <Button
          disabled
          color={'success'}
        >
          success
        </Button>
        <Button
          disabled
          color={'info'}
        >
          info
        </Button>
        <Button
          disabled
          color={'warning'}
        >
          warning
        </Button>
        <Button
          disabled
          color={'danger'}
        >
          danger
        </Button>
        <Button
          disabled
          color={'link'}
        >
          link
        </Button>
      </div>
      <Title>outline</Title>
      <div className="flex flex-row space-x-2">
        <Button
          outline
          color={'default'}
        >
          default
        </Button>
        <Button
          outline
          color={'primary'}
        >
          primary
        </Button>
        <Button
          outline
          color={'success'}
        >
          success
        </Button>
        <Button
          outline
          color={'info'}
        >
          info
        </Button>
        <Button
          outline
          color={'warning'}
        >
          warning
        </Button>
        <Button
          outline
          color={'danger'}
        >
          danger
        </Button>
        <Button
          outline
          color={'link'}
        >
          link
        </Button>
      </div>
      <Title>outline disabled</Title>
      <div className="flex flex-row space-x-2">
        <Button
          disabled
          outline
          color={'default'}
        >
          default
        </Button>
        <Button
          disabled
          outline
          color={'primary'}
        >
          primary
        </Button>
        <Button
          disabled
          outline
          color={'success'}
        >
          success
        </Button>
        <Button
          disabled
          outline
          color={'info'}
        >
          info
        </Button>
        <Button
          disabled
          outline
          color={'warning'}
        >
          warning
        </Button>
        <Button
          disabled
          outline
          color={'danger'}
        >
          danger
        </Button>
        <Button
          disabled
          outline
          color={'link'}
        >
          link
        </Button>
      </div>
    </>
  ),
}
