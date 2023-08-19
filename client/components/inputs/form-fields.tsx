import { Grid } from "@mui/material";

type TFormfieldsProps = {
  children: React.ReactNode;
  spacing?: number;
};

export function FormFields({ children, spacing = 2 }: TFormfieldsProps) {
  return (
    <Grid
      container
      spacing={spacing}
    >
      {children}
    </Grid>
  );
}
