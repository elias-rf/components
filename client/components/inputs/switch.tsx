import FormControlLabel from "@mui/material/FormControlLabel";
import MuiSwitch from "@mui/material/Switch";

export function Switch({
  onChange,
  onBlur,
  value,
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
          onChange={(e) => onChange(e.target.checked)}
          onBlur={onBlur}
        />
      }
    />
  );
}
