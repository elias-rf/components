import { CheckBox } from '@/client/components/ui/check-box.js'
import { ListGroup } from '@/client/components/ui/list-group/list-group.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'

export default {
  title: 'components / ui / ListGroup',
}

export const Default: Story = () => {
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
}
