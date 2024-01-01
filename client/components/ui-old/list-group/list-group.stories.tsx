import { CheckBox } from '@/client/components/ui-old/check-box/check-box.js'
import { ListGroup } from '@/client/components/ui-old/list-group/list-group.js'
import '@/client/index.css'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ListGroup> = {
  component: ListGroup,
}

export default meta
type Story = StoryObj<typeof ListGroup>

export const Default: Story = {
  render: () => {
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            key={1}
            onClick={() => console.log('permission 1')}
            active
          >
            <div className="flex items-center space-x-2">
              <CheckBox value={false} />
              <div>Teste 1</div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            key={11}
            onClick={() => console.log('permission 2')}
          >
            <CheckBox value={true} />
          </ListGroup.Item>
          <ListGroup.Item
            key={111}
            onClick={() => console.log('permission 3')}
          >
            <CheckBox value={false} />
          </ListGroup.Item>
        </ListGroup>
      </>
    )
  },
}
