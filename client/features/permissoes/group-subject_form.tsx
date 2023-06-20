import { TFormStatus } from "@/types";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Unstable_Grid2";
import { UseFormReturn } from "react-hook-form";

type TGroupSubjectFormProps = {
  form: UseFormReturn<any>;
  status: TFormStatus;
};

export function GroupSubjectForm({ form, status }: TGroupSubjectFormProps) {
  return (
    <Grid2
      container
      spacing={2}
    >
      <Grid2 xs={6}>
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
      </Grid2>
      <Grid2 xs={6}>
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
      </Grid2>
    </Grid2>
  );
}
