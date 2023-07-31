import { TextField as MuiTextField } from "@/client/components/ui";

export function TextField({
  onChange,
  onBlur,
  value,
  label,
  required,
  disabled,
  error,
  helperText,
}: any) {
  return (
    <MuiTextField
      fullWidth
      size="small"
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required={required}
      disabled={disabled}
      error={error}
      helperText={helperText}
    />
  );
}
