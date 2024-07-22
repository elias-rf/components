import { Link } from './link.jsx'

const meta = {
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

export const Example = (args) => <Link {...args}>The missing link</Link>

Example.args = {
  href: 'https://www.imdb.com/title/tt6348138/',
  target: '_blank',
}
