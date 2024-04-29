import { Button } from '@/client/components/button/button.jsx'
import { JsonView } from '@/client/components/json-view/json-view.jsx'
import { SelectBadge } from '@/client/components/select-badge/select-badge.jsx'
import { useForm } from 'react-hook-form'

const meta = {
  component: SelectBadge,
  args: {
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['error', 'success', 'none'],
    },
  },
}
export default meta

export const Default = {
  render: () => {
    const form = useForm < { slc } > { defaultValues: { slc: 'BR' } }
    const onSubmit = (data) => console.log(data)

    return (
      <div>
        <SelectBadge
          options={[
            ['United States', 'US'],
            ['Canada', 'CA'],
            ['Chile', 'CH'],
            ['France', 'FR'],
            ['Brazil', 'BR'],
            ['Germany', 'DE'],
            ['India', 'IN'],
            ['Japan', 'JP'],
          ]}
          {...form.register('slc')}
        />
        <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>

        <JsonView data={{ vlr: form.watch() }} />
      </div>
    )
  },
}
