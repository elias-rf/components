import { SearchIcon, XIcon } from 'lucide-react'
import { SearchField as AriaSearchField } from 'react-aria-components'
import { Button } from '../button.jsx'
import { composeTailwindRenderProps } from '../utils.mjs'
import { Description } from './description.jsx'
import { FieldError } from './field-error.jsx'
import { FieldGroup } from './field-group.jsx'
import { Label } from './label.jsx'
import { Input } from './text/input.jsx'

// export interface SearchFieldProps extends AriaSearchFieldProps {
//   label?: string;
//   description?: string;
//   errorMessage?: string | ((validation: ValidationResult) => string);
// }

export function SearchField({ label, description, errorMessage, ...props }) {
  return (
    <AriaSearchField
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'group flex min-w-[40px] flex-col gap-1'
      )}
    >
      {label && <Label>{label}</Label>}
      <FieldGroup>
        <SearchIcon
          aria-hidden
          className="ml-2 h-4 w-4 text-gray-500 group-disabled:text-gray-200 dark:text-zinc-400 dark:group-disabled:text-zinc-600 forced-colors:text-[ButtonText] forced-colors:group-disabled:text-[GrayText]"
        />
        <Input className="[&::-webkit-search-cancel-button]:hidden" />
        <Button
          variant="icon"
          className="w-6 mr-1 group-empty:invisible"
        >
          <XIcon
            aria-hidden
            className="w-4 h-4"
          />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
    </AriaSearchField>
  )
}
