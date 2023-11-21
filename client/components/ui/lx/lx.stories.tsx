import { JsonView } from '@/client/components/json-view/json-view.js'
import { useStateMutable } from '@/client/lib/hooks/use-state-mutable.js'
import { Story, StoryDefault } from '@ladle/react'
import { Lx } from './lx.js'

export default {
  title: 'lx',
} satisfies StoryDefault

export const Default: Story = () => {
  const child = useStateMutable({ value: '' })

  return (
    <div>
      <Lx child={child}>
        <Lx.Item value="1">ok 1</Lx.Item>
        <Lx.Item value="2">ok 2</Lx.Item>
      </Lx>

      <JsonView
        data={child}
        className="p-2 mt-4 border-2 border-gray-500"
      />
    </div>
  )
}
