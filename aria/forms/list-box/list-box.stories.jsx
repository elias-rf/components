import { ListBoxItem } from './list-box-item.jsx'
import { ListBox } from './list-box.jsx'

const meta = {
  component: ListBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => (
  <ListBox
    aria-label="Ice cream flavor"
    {...args}
  >
    <ListBoxItem id="chocolate">Chocolate</ListBoxItem>
    <ListBoxItem id="mint">Mint</ListBoxItem>
    <ListBoxItem id="strawberry">Strawberry</ListBoxItem>
    <ListBoxItem id="vanilla">Vanilla</ListBoxItem>
  </ListBox>
)

Example.args = {
  onAction: null,
  selectionMode: 'multiple',
}

export const DisabledItems = (args) => <Example {...args} />
DisabledItems.args = {
  ...Example.args,
  disabledKeys: ['mint'],
}
