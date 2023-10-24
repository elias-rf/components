import { NumericFormat } from 'react-number-format'

export const NumberField = ({
  onChange,
  onBlur,
  value,
  required,
  disabled,
  decimals = 2,
}: any) => {
  return (
    <NumericFormat
      thousandSeparator="."
      decimalSeparator=","
      fixedDecimalScale
      decimalScale={decimals}
      valueIsNumericString
      value={value}
      // customInput={input}
      onValueChange={(values) => onChange(values.value)}
      onBlur={onBlur}
      required={required}
      disabled={disabled}
    />
  )
}
