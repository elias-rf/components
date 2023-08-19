import { Grid, TextField } from "@mui/material";
import { TFormStatus } from "@/types";
import { UseFormReturn } from "react-hook-form";

type TGroupSubjectFormProps = {
  form: UseFormReturn<any>;
  status: TFormStatus;
};

export function GroupSubjectForm({ form, status }: TGroupSubjectFormProps) {
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid xs={6}>
        <TextField
          required
          fullWidth
          size="small"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          label={"Grupo"}
          disabled={status === "view"}
          {...form.register("group_id")}
        />
      </Grid>
      <Grid xs={6}>
        <TextField
          fullWidth
          size="small"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          label={"Recurso"}
          disabled={status === "view"}
          {...form.register("subject_id")}
        />
      </Grid>
    </Grid>
  );
}
