import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import MuiTextField from "@mui/material/TextField";

type TextFieldMultipleProps = {
  required?: boolean;
  label: string;
  items: string[];
  labels?: string[];
  field: {
    onChange: (vlr: string[]) => void;
    onBlur: (e: any) => void;
    value: string[];
  };
};

export function TextFieldMultiple({
  field: { onChange, onBlur, value },
  required,
  label,
  labels,
  items,
}: TextFieldMultipleProps) {
  function handleChange(e: any, vlr: any) {
    onChange(vlr);
  }

  function getLabel(item: string) {
    return labels ? labels[items.indexOf(item)] : item;
  }

  return (
    <Autocomplete
      multiple
      autoHighlight
      filterSelectedOptions
      fullWidth
      size="small"
      noOptionsText="Sem opções"
      onChange={handleChange}
      value={value}
      onBlur={onBlur}
      options={items}
      getOptionLabel={getLabel}
      renderOption={(props, option) => (
        <Box
          component="li"
          {...props}
        >
          {getLabel(option)}
        </Box>
      )}
      renderInput={(params) => (
        <MuiTextField
          {...params}
          required={required}
          label={label}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
    />
  );
}
