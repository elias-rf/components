import { Checkbox } from '../checkbox/checkbox.jsx'
import { ListGrupo } from '../list-grupo/list-grupo.jsx'
import { ListGrupoItem } from '../list-grupo/list-grupo-item.jsx'
import React from 'react'

const meta = {
  component: ListGrupo,
}

export default meta

export const Default = {
  render: () => {
    const [active, setActive] = React.useState('1')
    const [data, setData] = React.useState([true, false, false])
    return (
      <>
        <ListGrupo>
          <ListGrupoItem
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
          </ListGrupoItem>
          <ListGrupoItem
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
          </ListGrupoItem>
          <ListGrupoItem
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
          </ListGrupoItem>
        </ListGrupo>
      </>
    )
  },
}
