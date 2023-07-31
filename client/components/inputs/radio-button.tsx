import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@/client/components/ui";

export function RadioButton({
  onChange,
  onBlur,
  value,
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
      variant="outlined"
    >
      <FormLabel sx={{ fontSize: "12px" }}>{label}</FormLabel>
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
            sx={{ height: "30px" }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
