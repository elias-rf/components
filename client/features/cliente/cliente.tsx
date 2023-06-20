import { Comment } from "@/client/components/comment";
import { Table } from "@/client/components/table";
import type { TFilter, TFormStatus, TSelection, TSort } from "@/types";
import { deepEqual } from "@/utils/object/deep-equal";
import { toStringProperties } from "@/utils/object/to-string-properties";
import { recordClear } from "@/utils/schema/record-clear";
import { trpc } from "@/utils/trpc/trpc";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { useForm } from "react-hook-form";
import { Page } from "../../components/page/page";
import { clienteColumns } from "./cliente-columns";
import { ClienteForm } from "./cliente-form";

const dataClear = recordClear(clienteColumns);

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
  const dataList = trpc.cliente.list.useQuery({ filter, sort });

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
      <Comment>cliente</Comment>
      <Page>
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
              <ClienteForm
                form={form}
                status={status}
              />
            )}
          </Table>
        </Stack>
      </Page>
    </>
  );
}
