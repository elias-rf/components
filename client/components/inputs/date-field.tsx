import { TextField as MuiTextField } from "@/client/components/ui";
import { PatternFormat } from "react-number-format";

export const DateField = ({
  label,
  onChange,
  onBlur,
  value,
  required,
  disabled,
  error,
  helperText,
}: any) => {
  return (
    <PatternFormat
      fullWidth
      size="small"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      format="##/##/####"
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
