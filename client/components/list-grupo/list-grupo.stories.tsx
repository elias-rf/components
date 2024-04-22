import { Checkbox } from '@/client/components/checkbox/checkbox.js'
import { ListGrupo } from '@/client/components/list-grupo/list-grupo.js'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

const meta: Meta<typeof ListGrupo> = {
  component: ListGrupo,
}

export default meta
type Story = StoryObj<typeof ListGrupo>

export const Default: Story = {
  render: () => {
    const [active, setActive] = React.useState('1')
    const [data, setData] = React.useState([true, false, false])
    return (
      <>
        <ListGrupo>
          <ListGrupo.Item
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
          </ListGrupo.Item>
          <ListGrupo.Item
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
          </ListGrupo.Item>
          <ListGrupo.Item
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
          </ListGrupo.Item>
        </ListGrupo>
      </>
    )
  },
}
