import { Disclosure } from './disclosure'
import { DisclosureContent } from './disclosure-content'
import { DisclosureHeading } from './disclosure-heading'

const meta = {
  component: Disclosure,
}

export default meta

export const Default = {
  args: {},
  render: () => {
    return (
      <Disclosure>
        <DisclosureHeading>What are vegetables?</DisclosureHeading>
        <DisclosureContent>
          Vegetables are parts of plants that are consumed by humans or other
          animals as food. The original meaning is still commonly used and is
          applied to plants collectively to refer to all edible plant matter,
          including the flowers, fruits, stems, leaves, roots, and seeds.
        </DisclosureContent>
      </Disclosure>
    )
  },
}
