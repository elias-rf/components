import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/client/components/command/command.js'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/client/components/popover/popover.js'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import * as React from 'react'

import { Button } from '@/client/components/button/button.js'
import { cn } from '@/client/lib/utils.js'

type Option = {
  label: string
  value: string
}

type TComboBox = {
  options: Option[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  inputPlaceholder?: string
  disabled?: boolean
}

const Combobox = ({
  options,
  value,
  onValueChange,
  placeholder,
  inputPlaceholder,
  disabled,
}: TComboBox) => {
  const [open, setOpen] = React.useState(false)
  const [vlr, setVlr] = React.useState(value)

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between"
          disabled={disabled}
        >
          {vlr
            ? options.find((option) => option.value === vlr)?.label
            : placeholder || ''}
          <CaretSortIcon className="w-4 h-4 ml-2 opacity-50 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command>
          <CommandInput
            placeholder={inputPlaceholder || ''}
            className="h-9"
          />
          <CommandEmpty>Não encontrado</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  const v = currentValue === vlr ? '' : currentValue
                  setVlr(v)
                  onValueChange && onValueChange(v)
                  setOpen(false)
                }}
              >
                {option.label}
                <CheckIcon
                  className={cn(
                    'ml-auto h-4 w-4',
                    vlr === option.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { Combobox }
