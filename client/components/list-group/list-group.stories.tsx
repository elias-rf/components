import { Checkbox } from '@/client/components/checkbox/checkbox.js'
import { ListGroup } from '@/client/components/list-group/list-group.js'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof ListGroup> = {
  component: ListGroup,
}

export default meta
type Story = StoryObj<typeof ListGroup>

export const Default: Story = {
  render: () => {
    const [active, setActive] = React.useState('1')
    const [data, setData] = React.useState([true, false, false])
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            key={1}
            onClick={() => {
              setActive('1')
              setData([!data[0], data[1], data[2]])
            }}
            active={active === '1'}
          >
            <div className="flex items-center space-x-2">
              <Checkbox checked={data[0]} />
              <div>Teste 1</div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            key={11}
            onClick={() => {
              setActive('11')
              setData([data[0], !data[1], data[2]])
            }}
            active={active === '11'}
          >
            <div className="flex items-center space-x-2">
              <Checkbox checked={data[1]} />
              <div>Teste 11</div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item
            key={111}
            onClick={() => {
              setActive('111')
              setData([data[0], data[1], !data[2]])
            }}
            active={active === '111'}
          >
            <div className="flex items-center space-x-2">
              <Checkbox checked={data[2]} />
              <div>Teste 111</div>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </>
    )
  },
}
