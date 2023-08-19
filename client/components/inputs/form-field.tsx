import { Grid } from "@mui/material";
import type { Grid2Props } from "@mui/material/Unstable_Grid2/Grid2Props";
import { Controller } from "react-hook-form";

type TFormFieldProps = {
  name: string;
  control: any;
  defaultValue: any;
  render: any;
  rules?: any;
  xs?: Grid2Props["xs"];
  sm?: Grid2Props["sm"];
  md?: Grid2Props["md"];
  lg?: Grid2Props["lg"];
  xl?: Grid2Props["xl"];
};

export function FormField({
  name,
  control,
  defaultValue,
  rules,
  xs,
  sm,
  md,
  lg,
  xl,
  render,
}: TFormFieldProps) {
  return (
    <Grid
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      <Controller
        name={name}
        control={control}
        render={render}
        rules={rules}
        defaultValue={defaultValue}
      />
    </Grid>
  );
}
