import {
  DateField,
  FormField,
  FormFields,
  NumberField,
  RadioButton,
  Select,
  Switch,
  TextField,
  TextFieldMultiple,
} from './index'
import { CheckBox } from '@/client/components/ui/check-box'

type TComponentsProps = {
  component: any
  label: string
  required?: boolean
  disabled?: boolean
  value: any
  onChange: any
  onBlur: any
  error: boolean
  helperText: string
  items?: string[]
  labels?: string[]
}

function Components(props: TComponentsProps) {
  const components = {
    CheckBox,
    FormField,
    FormFields,
    Switch,
    NumberField,
    TextField,
    TextFieldMultiple,
    Select,
    RadioButton,
    DateField,
  }
  type TComponent = keyof typeof components
  const Component = components[props.component as TComponent] || TextField

  return <Component {...props} />
}

export type TFormJsonField = {
  name: string
  component: string
  label: string
  defaultValue: any
  required?: boolean
  disabled?: boolean
  items?: string[]
  labels?: string[]
  rules?: any
  className?: string
}

type TFormJson = {
  form: any
  fields: TFormJsonField[]
}

export function FormJson({ form, fields }: TFormJson) {
  return (
    <>
      <FormFields>
        {fields.map((fld) => {
          return (
            <FormField
              key={fld.name}
              name={fld.name}
              control={form.control}
              defaultValue={fld.defaultValue}
              rules={fld.rules}
              className={fld.className}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }: any) => (
                <Components
                  component={fld.component}
                  label={fld.label}
                  required={fld.required}
                  disabled={fld.disabled}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  error={error ? true : false}
                  helperText={error?.message}
                  items={fld.items}
                  labels={fld.labels}
                />
              )}
            />
          )
        })}
      </FormFields>
    </>
  )
}
