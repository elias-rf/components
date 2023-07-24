import FormControlLabel from "@mui/material/FormControlLabel";
import MuiSwitch from "@mui/material/Switch";

export function Switch({
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
        <MuiSwitch
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      }
    />
  );
}
