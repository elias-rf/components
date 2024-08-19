import { ChevronDown } from 'lucide-react'
import PropTypes from 'prop-types'
import { ComboBox as AriaComboBox, ListBox } from 'react-aria-components'
import { Button } from '../../button.jsx'
import { Popover } from '../../popover.jsx'
import { composeTailwindRenderProps } from '../../utils.mjs'
import { Description } from '../description.jsx'
import { FieldError } from '../field-error.jsx'
import { FieldGroup } from '../field-group.jsx'
import { Label } from '../label.jsx'
import { Input } from '../text/input.jsx'

// export interface ComboBoxProps<T extends object> extends Omit<AriaComboBoxProps<T>, 'children'> {
//   label?: string;
//   description?: string | null;
//   errorMessage?: string | ((validation: ValidationResult) => string);
//   children: React.ReactNode | ((item: T) => React.ReactNode);
// }

export function ComboBoxField({
  label,
  description,
  errorMessage,
  children,
  items,
  ...props
}) {
  return (
    <AriaComboBox
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        'group flex flex-col gap-1'
      )}
    >
      <Label>{label}</Label>
      <FieldGroup>
        <Input />
        <Button
          variant="icon"
          className="w-6 mr-1 rounded outline-offset-0"
        >
          <ChevronDown
            aria-hidden
            className="w-4 h-4"
          />
        </Button>
      </FieldGroup>
      {description && <Description>{description}</Description>}
      <FieldError>{errorMessage}</FieldError>
      <Popover
        className="w-[--trigger-width]"
        showArrow={false}
      >
        <ListBox
          items={items}
          className="max-h-[inherit] overflow-auto p-1 outline-0 [clip-path:inset(0_0_0_0_round_.75rem)]"
        >
          {children}
        </ListBox>
      </Popover>
    </AriaComboBox>
  )
}

ComboBoxField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  children: PropTypes.node,
  items: PropTypes.arrayOf(PropTypes.object),
}
