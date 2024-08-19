import {
  Combobox as ComboboxBase,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { useState } from 'react'

export function Combobox({ data, value }) {
  const [selectedPerson, setSelectedPerson] = useState(value)
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? data
      : data.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <ComboboxBase
      value={selectedPerson}
      onChange={setSelectedPerson}
      onClose={() => setQuery('')}
    >
      <ComboboxInput
        aria-label="Assignee"
        displayValue={(person) => person?.name}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ComboboxOptions
        anchor="bottom"
        className="border empty:invisible"
      >
        {filteredPeople.map((person) => (
          <ComboboxOption
            key={person.id}
            value={person}
            className="data-[focus]:bg-blue-100"
          >
            {person.name}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </ComboboxBase>
  )
}
