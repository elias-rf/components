import { Combobox } from './combobox'

const meta = {
  component: Combobox,
}

export default meta

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

export const Default = {
  args: {},
  render: () => {
    return (
      <Combobox
        data={people}
        value={people[0]}
      />
    )
  },
}
