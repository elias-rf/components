import { TFormStatus } from "@/types";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Unstable_Grid2";
import { UseFormReturn } from "react-hook-form";

type TAgendaTelefoneFormProps = {
  form: UseFormReturn<any>;
  status: TFormStatus;
};

export const AgendaTelefoneForm = ({
  form,
  status,
}: TAgendaTelefoneFormProps) => {
  return (
    <Grid2
      container
      spacing={2}
    >
      <Grid2
        xs={12}
        sm={2}
        lg={1}
      >
        <TextField
          required
          fullWidth
          size="small"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          disabled={status === "view"}
          label={"Ramal"}
          {...form.register("agenda_telefone_id")}
        />
      </Grid2>
      <Grid2
        xs={12}
        sm={10}
        lg={5}
      >
        <TextField
          required
          fullWidth
          size="small"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          label={"Nome"}
          disabled={status === "view"}
          {...form.register("nome")}
        />
      </Grid2>
      <Grid2
        xs={12}
        sm={4}
        lg={2}
      >
        <TextField
          fullWidth
          size="small"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          label={"Setor"}
          disabled={status === "view"}
          {...form.register("setor")}
        />
      </Grid2>
      <Grid2
        xs={12}
        sm={8}
        lg={4}
      >
        <TextField
          fullWidth
          size="small"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          label={"Email"}
          disabled={status === "view"}
          {...form.register("email")}
        />
      </Grid2>
    </Grid2>
  );
};
