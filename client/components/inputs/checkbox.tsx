import MuiCheckbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export function Checkbox({
  field: { onChange, onBlur, value },
  required,
  disabled,
  label,
}: any) {
  return (
    <FormControlLabel
      required={required}
      disabled={disabled}
      label={label}
      control={
        <MuiCheckbox
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      }
    />
  );
}
