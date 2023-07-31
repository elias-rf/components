import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect from "@mui/material/Select";

export function Select({
  onChange,
  onBlur,
  value,
  label,
  items,
  labels,
  required,
  disabled,
  error,
  helperText,
}: any) {
  return (
    <FormControl
      fullWidth
      size="small"
      required={required}
      disabled={disabled}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        value={value}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
      >
        {items.map((item: any) => (
          <MenuItem
            key={item}
            value={item}
          >
            {labels ? labels[items.indexOf(item)] : item}
          </MenuItem>
        ))}
      </MuiSelect>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
