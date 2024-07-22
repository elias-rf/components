import { Tag } from '../tag.jsx'
import { TagGroup } from './tag-group.jsx'

const meta = {
  component: TagGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => (
  <TagGroup {...args}>
    <Tag>Chocolate</Tag>
    <Tag>Mint</Tag>
    <Tag>Strawberry</Tag>
    <Tag>Vanilla</Tag>
  </TagGroup>
)

Example.args = {
  label: 'Ice cream flavor',
  selectionMode: 'single',
}
