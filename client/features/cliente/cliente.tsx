import { Table } from "@/client/components/table";
import { Box, Stack, Typography } from "@/client/components/ui";
import { Permissions } from "@/client/features/permissions";
import type { TFilter, TFormStatus, TSelection, TSort } from "@/types";
import { day } from "@/utils/date/day";
import { deepEqual } from "@/utils/object/deep-equal";
import { toStringProperties } from "@/utils/object/to-string-properties";
import { recordClear } from "@/utils/schema/record-clear";
import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { useForm } from "react-hook-form";
import { clienteColumns } from "./cliente-columns";
import { ClienteForm } from "./cliente-form";

const dataClear = recordClear(clienteColumns);

const permissions = [
  { id: "cliente_read", label: "Visualizar dados do cliente próprio" },
  { id: "cliente_read_all", label: "Visualizar dados de todos os cliente" },
];

/**
 * Agenda de Ramais
 */
export function Cliente({ onState }: any) {
  // Form
  const form = useForm({ defaultValues: dataClear, mode: "onTouched" });
  const [status, setStatus] = React.useState<TFormStatus>("view");
  // List
  const [selection, setSelection] = React.useState<TSelection>([
    {
      cliente_id: 0,
    },
  ]);
  const [filter, setFilter] = React.useState<TFilter>({});
  const [sort, setSort] = React.useState<TSort>({});
  // Data
  trpc.cliente.read.useQuery(
    { id: selection[0] },
    {
      enabled: selection[0] !== undefined,
      onSuccess: (rec) => {
        form.reset(toStringProperties(rec));
      },
    }
  );
  const dataList = trpc.cliente.list.useQuery(
    { filter, sort },
    {
      select: (rows) => {
        return rows.map((row) => {
          row.data_cadastro = day(row.data_cadastro).format("YYYY-MM-DD");
          return row;
        });
      },
    }
  );

  function getId(row: any) {
    return {
      cliente_id: row.cliente_id,
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

  React.useEffect(() => {
    onState && onState({ filter, selection, sort, status });
  }, [onState, status, selection, filter, sort]);

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
          <Typography variant="h5">Histórico do cliente</Typography>
          <Permissions permissions={permissions} />
        </Stack>
        <Table
          rows={dataList.data ?? []}
          columns={clienteColumns}
          getId={getId}
          selection={selection}
          filter={filter}
          sort={sort}
          onSelection={handleSelection}
          onFilter={handleFilter}
          onSort={handleSort}
        >
          {() => (
            <Box
              sx={{
                mb: 4,
                p: 1,
                border: "2px solid rgba(25, 118, 210, 0.2)",
              }}
            >
              <ClienteForm
                form={form}
                status={status}
              />
            </Box>
          )}
        </Table>
      </Stack>
    </>
  );
}
