import { Checkbox, FormJson, TextField } from "@/client/components/inputs";
import { Grid, Tab, Tabs } from "@mui/material";
import { ClienteQuantidade } from "@/client/features/cliente/cliente-quantidade";
import { ClienteValor } from "@/client/features/cliente/cliente-valor";
import { ClienteValorMedio } from "@/client/features/cliente/cliente-valor-medio";
import type { TId } from "@/types";
import { TFormStatus } from "@/types";
import React from "react";

type TClienteFormProps = {
  form: TId;
  status: TFormStatus;
};

export function ClienteForm({ form, status }: TClienteFormProps) {
  const [tab, setTab] = React.useState(0);

  const fields = [
    {
      name: "cliente_id",
      component: "TextField",
      label: "Cód Cliente",
      defaultValue: " ",
      required: true,
      disabled: status === "view",
      xs: 12,
      sm: 2,
      lg: 1,
    },
    {
      name: "nome",
      component: "TextField",
      label: "Nome",
      defaultValue: " ",
      required: true,
      disabled: status === "view",
      xs: 12,
      sm: 10,
      lg: 6,
    },
    {
      name: "cidade",
      component: "TextField",
      label: "Cidade",
      defaultValue: " ",
      disabled: status === "view",
      xs: 12,
      sm: 6,
      lg: 4,
    },
    {
      name: "uf",
      component: "TextField",
      label: "UF",
      defaultValue: " ",
      disabled: status === "view",
      xs: 12,
      sm: 2,
      lg: 1,
    },
    {
      name: "cnpj",
      component: "TextField",
      label: "CNPJ",
      defaultValue: " ",
      disabled: status === "view",
      xs: 12,
      sm: 4,
      lg: 2,
    },
    {
      name: "vendedor_id",
      component: "TextField",
      label: "Cód Vendedor",
      defaultValue: " ",
      disabled: status === "view",
      xs: 12,
      sm: 2,
      lg: 1,
    },
    {
      name: "eh_ativo",
      component: "Checkbox",
      label: "Habilitado",
      defaultValue: true,
      disabled: status === "view",
      xs: 12,
      sm: 2,
      lg: 1,
    },
    {
      name: "email",
      component: "TextField",
      label: "Email",
      defaultValue: " ",
      disabled: status === "view",
      xs: 12,
      sm: 8,
      lg: 4,
    },
    {
      name: "identidade",
      component: "TextField",
      label: "Identidade",
      defaultValue: " ",
      disabled: status === "view",
      xs: 12,
      sm: 8,
      lg: 4,
    },
    {
      name: "data_cadastro",
      component: "TextField",
      label: "Data de Cadastro",
      defaultValue: " ",
      disabled: status === "view",
      xs: 12,
      sm: 8,
      lg: 4,
    },
  ];

  return (
    <>
      <FormJson
        form={form}
        fields={fields}
      />
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
        </Grid>
        <Grid
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
        </Grid>
        <Grid
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
        </Grid>
        <Grid
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
        </Grid>
        <Grid
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
        </Grid>
        <Grid
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
        </Grid>
        <Grid
          xs={12}
          sm={2}
          lg={1}
        >
          <Checkbox
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
        </Grid>
        <Grid
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
        </Grid>
        <Grid
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
        </Grid>
        <Grid
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
        </Grid>
        <Grid xs={12}>
          <Tabs
            value={tab}
            onChange={(_: any, tab: any) => setTab(tab)}
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
        </Grid>
      </Grid>
    </>
  );
}
