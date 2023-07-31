import {
  Autocomplete,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@/client/components/ui";
import { TFormStatus } from "@/types";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { UseFormReturn } from "react-hook-form";
import { usuarioColumns } from "./usuario_columns";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

type TUsuarioFormProps = {
  form: UseFormReturn<any>;
  status: TFormStatus;
};

export function UsuarioForm({ form, status }: TUsuarioFormProps) {
  // const groupList = trpc.group.list.useQuery({ sort: { name: "asc" } });

  return (
    <Grid
      container
      spacing={2}
    >
      <Grid
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
          label={usuarioColumns[0].label}
          {...form.register(usuarioColumns[0].name)}
        />
      </Grid>
      <Grid
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
          label={usuarioColumns[1].label}
          {...form.register(usuarioColumns[1].name)}
          disabled={status === "view"}
        />
      </Grid>
      <Grid
        xs={12}
        sm={4}
        lg={2}
      >
        <TextField
          fullWidth
          required
          size="small"
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          label={usuarioColumns[2].label}
          {...form.register(usuarioColumns[2].name)}
          disabled={status === "view"}
        />
      </Grid>
      <Grid
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
          label={usuarioColumns[3].label}
          {...form.register(usuarioColumns[3].name)}
          disabled={status === "view"}
        />
      </Grid>
      <Grid
        xs={4}
        sm={2}
        lg={1}
      >
        <FormControlLabel
          control={<Checkbox />}
          label={usuarioColumns[4].label}
          {...form.register(usuarioColumns[4].name)}
        />
      </Grid>
      <Grid
        xs={8}
        sm={6}
        lg={4}
      >
        <Autocomplete
          multiple
          disableCloseOnSelect
          options={["Option 1", "Option 2", "Option 3"]}
          getOptionLabel={(option: any) => option}
          renderOption={(props: any, option: any, { selected }: any) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option}
            </li>
          )}
          renderInput={(params: any) => (
            <TextField
              {...params}
              fullWidth
              size="small"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
              label="Grupos de permissões"
              disabled={status === "view"}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}
