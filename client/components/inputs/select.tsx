import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MuiSelect from "@mui/material/Select";

export function Select({
  field: { onChange, onBlur, value },
  label,
  items,
  labels,
}: any) {
  return (
    <FormControl
      fullWidth
      size="small"
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        value={value}
        label={label}
        onChange={onChange}
        onBlur={onBlur}
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
    </FormControl>
  );
}
