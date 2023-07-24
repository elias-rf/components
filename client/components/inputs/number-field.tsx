import MuiTextField from "@mui/material/TextField";

import React from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatCustom = React.forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator="."
        decimalSeparator=","
        fixedDecimalScale
        decimalScale={2}
        valueIsNumericString
      />
    );
  }
);

export function NumberField2({
  field: { onChange, onBlur, value },
  label,
}: any) {
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
      InputProps={{
        inputComponent: NumericFormatCustom as any,
      }}
    />
  );
}
