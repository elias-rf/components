import { JsonView } from '@/client/components/json-view/json-view.js'
import { useStateMutable } from '@/client/lib/hooks/use-state-mutable.js'
import type { Meta, StoryObj } from '@storybook/react'
import { Lx } from './lx.js'

const meta: Meta<typeof Lx> = {
  component: Lx,
}

export default meta
type Story = StoryObj<typeof Lx>

export const Default: Story = {
  render: () => {
    const child = useStateMutable({ value: '' })

    return (
      <div>
        <Lx child={child}>
          <Lx.Item value="1">ok 1</Lx.Item>
          <Lx.Item value="2">ok 2</Lx.Item>
        </Lx>

        <JsonView
          data={child}
          className="mt-4 border-2 border-gray-500 p-2"
        />
      </div>
    )
  },
}
