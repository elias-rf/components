# Forms Components

## useForm

```ts
useForm = (
  onSubmit?: (values: any) => void,
  initialValues: Record<string, any> = {}
) => {
    values:Record<string, any>,
    errors:Record<string, any>,
    dirty:boolean,
    valid:boolean,
    setValues:(values: Record<string, any>)=>void,
    setErrors:(errors: Record<string, any>)=>void,
    reset:(newInitial?: Record<string, any>)=>void,
    submit:()=>void,
  }

```
- values is current forms values
- errors is object with validation messages
- dirty if values is diferent from initialValues
- valid if no validation erros
- reset copy initialValues to values, if newInitial exist then is copied to initialValues before
- submit only if valid is true

## Form

Management of Field component

## Field

### Properties

- name of field in form
- validate function return undefined if valid
- field component as function