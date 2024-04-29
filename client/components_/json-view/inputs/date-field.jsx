import { PatternFormat } from 'react-number-format'

export const DateField = ({ onChange, onBlur, value, required, disabled }) => {
  return (
    <PatternFormat
      format="##/##/####"
      valueIsNumericString
      value={value}
      // customInput={MuiTextField}
      onValueChange={(values) => onChange(values.value)}
      onBlur={onBlur}
      required={required}
      disabled={disabled}
    />
  )
}
