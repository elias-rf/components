import { JsonView } from '@/client/components/json-view/json-view.js'

import type { Meta, StoryObj } from '@storybook/react'

const jsonData = {
  'string property': 'my string',
  '': 'empty name property',
  bigint_property: BigInt('9007199254740991'),
  number_property: 42.42,
  date_property: new Date(0),
  boolean_property: true,
  null_property: null,
  array_propery: [1, 2, 3, 4, 5],
  nested_object: {
    first: true,
    second: 'another value',
    sub_nested: {
      sub1: [true, true, true],
      longText:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pharetra at dolor eu egestas. Mauris bibendum a sem vel euismod. Proin vitae imperdiet diam. In sed gravida nisi, in convallis felis. Fusce convallis dapibus molestie. In tristique dapibus velit et rutrum. Nam vestibulum sodales tortor. Integer gravida aliquet sollicitudin. Duis at nulla varius, congue risus sit amet, gravida ipsum. Cras placerat pellentesque ipsum, a consequat magna pretium et. Duis placerat dui nisi, eget varius dui egestas eget. Etiam leo mauris, mattis et aliquam hendrerit, dapibus eu massa. Phasellus vitae vestibulum elit. Nulla congue eleifend massa at efficitur. ',
    },
  },
}

const meta: Meta<typeof JsonView> = {
  component: JsonView,
  args: {
    className: 'w-10 h-10',
  },
}

export default meta
type Story = StoryObj<typeof JsonView>

export const Padrao: Story = {
  render: () => (
    <>
      <JsonView data={1} />
      <JsonView data={[1, 2]} />
      <JsonView data={{ a: 1, b: 2 }} />
      <JsonView data={jsonData} />
    </>
  ),
}
