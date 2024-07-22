import { GridListItem } from './grid-list-item.jsx'
import { GridList } from './grid-list.jsx'

const meta = {
  component: GridList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => (
  <GridList
    aria-label="Ice cream flavors"
    {...args}
  >
    <GridListItem id="chocolate">Chocolate</GridListItem>
    <GridListItem id="mint">Mint</GridListItem>
    <GridListItem id="strawberry">Strawberry</GridListItem>
    <GridListItem id="vanilla">Vanilla</GridListItem>
  </GridList>
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
