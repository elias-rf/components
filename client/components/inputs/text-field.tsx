import MuiTextField from "@mui/material/TextField";

export function TextField({ field: { onChange, onBlur, value }, label }: any) {
  return (
    <MuiTextField
      fullWidth
      size="small"
      variant="outlined"
      label={label}
      InputLabelProps={{
        shrink: true,
      }}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
