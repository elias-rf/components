import { TextField as MuiTextField } from "@/client/components/ui";
import { NumericFormat } from "react-number-format";

export const NumberField = ({
  label,
  onChange,
  onBlur,
  value,
  required,
  disabled,
  error,
  helperText,
  decimals = 2,
}: any) => {
  return (
    <NumericFormat
      fullWidth
      size="small"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      thousandSeparator="."
      decimalSeparator=","
      fixedDecimalScale
      decimalScale={decimals}
      valueIsNumericString
      value={value}
      customInput={MuiTextField}
      label={label}
      onValueChange={(values) => onChange(values.value)}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      required={required}
      disabled={disabled}
    />
  );
};
