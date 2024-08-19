import { Heading } from './heading'
import { HeadingLevel } from './heading-level'

const meta = {
  component: Heading,
}

export default meta

export const Default = {
  args: {},
  render: () => {
    return (
      <HeadingLevel>
        <Heading>Heading Level 1.0</Heading>
        Text level 1<Heading>Heading Level 1.1</Heading>
        Text level 1.1
        <HeadingLevel>
          <Heading>Heading Level 2</Heading>
          Text level 2
          <HeadingLevel>
            <Heading>Heading Level 3</Heading>
            Text level 3
            <HeadingLevel>
              <Heading>Heading Level 4</Heading>
              Text level 4
            </HeadingLevel>
          </HeadingLevel>
        </HeadingLevel>
      </HeadingLevel>
    )
  },
}
