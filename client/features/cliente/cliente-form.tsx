import { ClienteQuantidade } from "@/client/features/cliente/cliente-quantidade";
import { ClienteValor } from "@/client/features/cliente/cliente-valor";
import { ClienteValorMedio } from "@/client/features/cliente/cliente-valor-medio";
import type { TId } from "@/types";
import { TFormStatus } from "@/types";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Unstable_Grid2";
import React from "react";

type TClienteFormProps = {
  form: TId;
  status: TFormStatus;
};

export function ClienteForm({ form, status }: TClienteFormProps) {
  const [tab, setTab] = React.useState(0);
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
          label={"Cód Cliente"}
          {...form.register("cliente_id")}
          required
          size="small"
          variant="filled"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          disabled={status === "view"}
        />
      </Grid2>
      <Grid2
        xs={12}
        sm={10}
        lg={6}
      >
        <TextField
          label={"Nome"}
          {...form.register("nome")}
          required
          size="small"
          variant="filled"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          disabled={status === "view"}
        />
      </Grid2>
      <Grid2
        xs={12}
        sm={6}
        lg={4}
      >
        <TextField
          label={"Cidade"}
          {...form.register("cidade")}
          size="small"
          variant="filled"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          disabled={status === "view"}
        />
      </Grid2>
      <Grid2
        xs={12}
        sm={2}
        lg={1}
      >
        <TextField
          label={"UF"}
          {...form.register("uf")}
          size="small"
          variant="filled"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          disabled={status === "view"}
        />
      </Grid2>
      <Grid2
        xs={12}
        sm={4}
        lg={2}
      >
        <TextField
          label={"CNPJ"}
          {...form.register("cnpj")}
          size="small"
          variant="filled"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          disabled={status === "view"}
        />
      </Grid2>
      <Grid2
        xs={12}
        sm={2}
        lg={1}
      >
        <TextField
          label={"Cód Vendedor"}
          {...form.register("vendedor_id")}
          size="small"
          variant="filled"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          disabled={status === "view"}
        />
      </Grid2>
      <Grid2
        xs={12}
        sm={2}
        lg={1}
      >
        <TextField
          label={"Habilitado"}
          {...form.register("eh_ativo")}
          size="small"
          variant="filled"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          disabled={status === "view"}
        />
      </Grid2>
      <Grid2
        xs={12}
        sm={8}
        lg={4}
      >
        <TextField
          label={"Email"}
          {...form.register("email")}
          size="small"
          variant="filled"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          disabled={status === "view"}
        />{" "}
      </Grid2>
      <Grid2
        xs={12}
        sm={4}
        lg={2}
      >
        <TextField
          size="small"
          variant="filled"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          disabled={status === "view"}
          label={"Identidade"}
          {...form.register("identidade")}
        />{" "}
      </Grid2>
      <Grid2
        xs={12}
        sm={4}
        lg={2}
      >
        <TextField
          size="small"
          variant="filled"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          disabled={status === "view"}
          label={"Data de Cadastro"}
          {...form.register("data_cadastro")}
        />
      </Grid2>
      <Grid2 xs={12}>
        <Tabs
          value={tab}
          onChange={(_, tab) => setTab(tab)}
        >
          <Tab
            label="Quantidade"
            value={0}
          />
          <Tab
            label="Valor"
            value={1}
          />
          <Tab
            label="Valor Médio"
            value={2}
          />
        </Tabs>
        {tab === 0 && <ClienteValor id={form.getValues("cliente_id")} />}
        {tab === 1 && <ClienteQuantidade id={form.getValues("cliente_id")} />}
        {tab === 2 && <ClienteValorMedio id={form.getValues("cliente_id")} />}
      </Grid2>
    </Grid2>
  );
}
