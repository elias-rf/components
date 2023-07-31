import {
  ButtonCancel,
  ButtonDel,
  ButtonEdit,
  ButtonNew,
  ButtonSave,
} from "@/client/components/form";
import { Table } from "@/client/components/table";
import { Box, Divider, Grid, Stack, Typography } from "@/client/components/ui";
import type { TFilter, TFormStatus, TSelection, TSort } from "@/types";
import { deepEqual } from "@/utils/object/deep-equal";
import { toStringProperties } from "@/utils/object/to-string-properties";
import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { useForm } from "react-hook-form";
import { groupSubjectColumns } from "./group-subject_columns";
import { GroupSubjectForm } from "./group-subject_form";

export type TGroupSubjectList = any;

const dataClear = {
  group_id: "",
  subject_id: "",
};

/**
 * Componente para manipular Agenda de Ramais
 *
 * @returns {*} componente react
 */
export function GroupSubject({ onState }: any) {
  // Form
  const form = useForm({ defaultValues: dataClear, mode: "onTouched" });
  const [status, setStatus] = React.useState<TFormStatus>("view");
  // List
  const [selection, setSelection] = React.useState<TSelection>([]);
  const [filter, setFilter] = React.useState<TFilter>({});
  const [sort, setSort] = React.useState<TSort>({});
  // Data
  trpc.groupSubject.read.useQuery(
    { id: selection[0] },
    {
      enabled: selection[0] !== undefined,
      onSuccess: (rec) => {
        form.reset(toStringProperties(rec));
      },
    }
  );
  const dataList = trpc.groupSubject.list.useQuery({ filter, sort });

  function getId(row: any) {
    return {
      group_id: row.group_id,
      subject_id: row.subject_id,
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

  const dataUpdate = trpc.groupSubject.update.useMutation({
    onSuccess: () => {
      trpcUtils.groupSubject.invalidate();
    },
  });

  const dataCreate = trpc.groupSubject.create.useMutation({
    onSuccess: () => {
      trpcUtils.groupSubject.invalidate();
    },
  });

  const dataDel = trpc.groupSubject.del.useMutation({
    onSuccess: () => {
      trpcUtils.groupSubject.invalidate();
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
          <Typography variant="h5">Permissões</Typography>
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
            <GroupSubjectForm
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
          columns={groupSubjectColumns}
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
                <GroupSubjectForm
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
