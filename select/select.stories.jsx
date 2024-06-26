import { JsonView } from '../json-view/json-view.jsx'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './select.jsx'

const meta = {
  component: Select,
  args: {
    disabled: false,
  },
  argTypes: {},
}

export default meta

export const Default = {
  render: (props) => {
    const [vlr, setVlr] = React.useState('')
    return (
      <div className="flex flex-col space-y-4">
        <Select value={vlr} onValueChange={(e) => setVlr(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <JsonView data={{ props, vlr }} />
      </div>
    )
  },
}
