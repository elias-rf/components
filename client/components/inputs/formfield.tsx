import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Controller } from "react-hook-form";

export function Formfield({ name, control, render }: any) {
  return (
    <Grid2>
      <Controller
        name={name}
        control={control}
        render={render}
      />
    </Grid2>
  );
}
