import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

export function RadioButton({
  field: { onChange, onBlur, value },
  label,
  items,
  labels,
  required,
  disabled,
}: any) {
  return (
    <FormControl
      required={required}
      disabled={disabled}
    >
      <FormLabel>{label}</FormLabel>
      <RadioGroup
        row
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {items.map((item: any) => (
          <FormControlLabel
            key={item}
            value={item}
            control={<Radio />}
            disabled={disabled}
            label={labels ? labels[items.indexOf(item)] : item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
