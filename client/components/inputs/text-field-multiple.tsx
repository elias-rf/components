import { Box, TextField as MuiTextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

type TextFieldMultipleProps = {
  required?: boolean;
  disabled?: boolean;
  label: string;
  items: string[];
  labels?: string[];
  onChange: (vlr: string[]) => void;
  onBlur: (e: any) => void;
  value: string[];
  error?: boolean;
  helperText?: string;
};

export function TextFieldMultiple({
  onChange,
  onBlur,
  value,
  required,
  disabled,
  label,
  labels,
  items,
  error,
  helperText,
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
      disabled={disabled}
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
          disabled={disabled}
          label={label}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
}
