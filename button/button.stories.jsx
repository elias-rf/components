import { Button } from './button.jsx'

const meta = {
  component: Button,
  args: {
    children: 'Button text',
    size: 'default',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
}

export default meta

export const Default = {
  render: (props) => (
    <>
      <div className="p-4">
        <Button {...props} />
      </div>

      <div className="flex flex-col space-y-2">
        <Button size={'sm'}>SM</Button>
        <Button size={'default'}>DEFAULT</Button>
        <Button size={'lg'}>LG</Button>
        <Button size={'icon'}>ICON</Button>
      </div>

      <div className="p-4">
        <div className="flex flex-row space-x-2">
          <Button color={'blue'}>BLUE</Button>
          <Button color={'red'}>RED</Button>
          <Button color={'green'}>GREEN</Button>
          <Button color={'yellow'}>YELLOW</Button>
          <Button color={'gray'}>GRAY</Button>
          <Button color={'ghost'}>GHOST</Button>
        </div>
      </div>
    </>
  ),
}
