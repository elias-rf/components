import { ButtonCancel } from "@/client/components/form/button-cancel";
import { ButtonDel } from "@/client/components/form/button-del";
import { ButtonEdit } from "@/client/components/form/button-edit";
import { ButtonNew } from "@/client/components/form/button-new";
import { ButtonSave } from "@/client/components/form/button-save";
import { Table } from "@/client/components/table";
import type { TFilter, TFormStatus, TSelection, TSort } from "@/types";
import { deepEqual } from "@/utils/object/deep-equal";
import { toStringProperties } from "@/utils/object/to-string-properties";
import { trpc } from "@/utils/trpc/trpc";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Unstable_Grid2";
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
            <Grid2
              container
              direction={"column"}
              spacing={1}
              sx={{
                mb: 4,
                p: 1,
                border: "2px solid rgba(25, 118, 210, 0.2)",
              }}
            >
              <Grid2
                container
                direction={"row"}
                spacing={2}
              >
                <Grid2>
                  <ButtonEdit
                    form={form}
                    status={status}
                    onStatus={setStatus}
                  />
                </Grid2>
                <Grid2>
                  <ButtonDel
                    form={form}
                    status={status}
                    onStatus={setStatus}
                    onClick={handleButtonDel}
                  />
                </Grid2>
              </Grid2>
              <Grid2>
                <UsuarioForm
                  form={form}
                  status={status}
                />
              </Grid2>
              <Grid2
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
              >
                <Grid2>
                  <ButtonSave
                    form={form}
                    onStatus={setStatus}
                    onClick={handleButtonSave}
                  />
                </Grid2>
                <Grid2>
                  <ButtonCancel
                    form={form}
                    status={status}
                    onStatus={setStatus}
                  />
                </Grid2>
              </Grid2>
            </Grid2>
          )}
        </Table>
      </Stack>
    </>
  );
}