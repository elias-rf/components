import {
  ButtonCancel,
  ButtonDel,
  ButtonEdit,
  ButtonNew,
  ButtonSave,
} from "@/client/components/form";
import { Table } from "@/client/components/table";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import type { TFilter, TFormStatus, TSelection, TSort } from "@/types";
import { deepEqual } from "@/utils/object/deep-equal";
import { toStringProperties } from "@/utils/object/to-string-properties";
import { trpc } from "@/rpc/utils/trpc";
import React from "react";
import { useForm } from "react-hook-form";
import { usuarioColumns } from "./usuario_columns";
import { UsuarioForm } from "./usuario_form";

const dataClear = {
  usuario_id: "",
  email: "",
  nome: "",
  setor: "",
};

export function Usuario({ onState }: any) {
  // Form
  const form = useForm({ defaultValues: dataClear, mode: "onTouched" });
  const [status, setStatus] = React.useState<TFormStatus>("view");
  // List
  const [selection, setSelection] = React.useState<TSelection>([]);
  const [filter, setFilter] = React.useState<TFilter>({});
  const [sort, setSort] = React.useState<TSort>({});
  // Data
  trpc.usuario.read.useQuery(
    { id: selection[0] },
    {
      enabled: selection[0] !== undefined,
      onSuccess: (rec) => {
        form.reset(toStringProperties(rec));
      },
    }
  );
  const dataList = trpc.usuario.list.useQuery({ filter, sort });

  function getId(row: any) {
    return {
      usuario_id: row.usuario_id,
    };
  }

  function handleSelection(selected: TSelection) {
    if (deepEqual(selected, selection)) return setSelection([]);
    setSelection(selected);
    setStatus("view");
  }

  function handleFilter(filterEvent: TFilter) {
    setFilter(filterEvent);
  }
  function handleSort(sortEvent: TSort) {
    setSort(sortEvent);
  }

  const trpcUtils = trpc.useContext();

  React.useEffect(() => {
    onState && onState({ filter, selection, sort, status });
  }, [onState, status, selection, filter, sort]);

  const dataUpdate = trpc.usuario.update.useMutation({
    onSuccess: () => {
      trpcUtils.usuario.invalidate();
    },
  });

  const dataCreate = trpc.usuario.create.useMutation({
    onSuccess: () => {
      trpcUtils.usuario.invalidate();
    },
  });

  const dataDel = trpc.usuario.del.useMutation({
    onSuccess: () => {
      trpcUtils.usuario.invalidate();
    },
  });

  function handleButtonNew() {
    form.reset(dataClear);
    setSelection([]);
  }

  function handleButtonDel() {
    dataDel.mutate({ id: selection[0] });
  }

  function handleButtonSave() {
    if (status === "edit")
      dataUpdate.mutate({ data: form.getValues(), id: selection[0] });
    if (status === "new") dataCreate.mutate({ data: form.getValues() });
  }

  return (
    <>
      <Stack
        direction="column"
        spacing={2}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">Usuários</Typography>
          <Stack
            direction="row"
            spacing={2}
          >
            {status === "new" ? (
              <>
                <ButtonSave
                  form={form}
                  onStatus={setStatus}
                  onClick={handleButtonSave}
                />
                <ButtonCancel
                  form={form}
                  status={status}
                  onStatus={setStatus}
                />
              </>
            ) : null}
            {status !== "new" ? (
              <ButtonNew
                form={form}
                status={status}
                onStatus={setStatus}
                onClick={handleButtonNew}
              />
            ) : null}
          </Stack>
        </Stack>
        {status === "new" ? (
          <Box sx={{ py: 1 }}>
            <UsuarioForm
              form={form}
              status={status}
            />
            <Divider
              variant="middle"
              sx={{ pt: 2 }}
            />
          </Box>
        ) : null}
        <Table
          rows={dataList.data ?? []}
          columns={usuarioColumns}
          getId={getId}
          selection={selection}
          filter={filter}
          sort={sort}
          onSelection={handleSelection}
          onFilter={handleFilter}
          onSort={handleSort}
        >
          {() => (
            <Grid
              container
              direction={"column"}
              spacing={1}
              sx={{
                mb: 4,
                p: 1,
                border: "2px solid rgba(25, 118, 210, 0.2)",
              }}
            >
              <Grid
                container
                direction={"row"}
                spacing={2}
              >
                <Grid>
                  <ButtonEdit
                    form={form}
                    status={status}
                    onStatus={setStatus}
                  />
                </Grid>
                <Grid>
                  <ButtonDel
                    form={form}
                    status={status}
                    onStatus={setStatus}
                    onClick={handleButtonDel}
                  />
                </Grid>
              </Grid>
              <Grid>
                <UsuarioForm
                  form={form}
                  status={status}
                />
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
              >
                <Grid>
                  <ButtonSave
                    form={form}
                    onStatus={setStatus}
                    onClick={handleButtonSave}
                  />
                </Grid>
                <Grid>
                  <ButtonCancel
                    form={form}
                    status={status}
                    onStatus={setStatus}
                  />
                </Grid>
              </Grid>
            </Grid>
          )}
        </Table>
      </Stack>
    </>
  );
}
