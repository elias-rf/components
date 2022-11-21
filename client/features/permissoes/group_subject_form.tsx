import React from "react";
import type { TEvent, TFieldClient } from "../../../types";
import { isEmpty } from "../../../utils/identify/is_empty";
import { Button } from "../../components/button";
import { Formfield } from "../../components/form/formfield";
import {
  useGroupSubjectCreate,
  useGroupSubjectDel,
  useGroupSubjectRead,
  useGroupSubjectSchema,
  useGroupSubjectUpdate,
} from "../../hooks/use-group-subject.hook";
import { useForm } from "../../lib/hooks/use-form.hook";
import { useQueryState } from "../../lib/hooks/use-query-state";
import {
  groupSubjectService,
  TGroupSubjectRecord,
} from "../../service/group-subject.service";

export function GroupSubjectForm() {
  const [selected] = useQueryState("selected", []);
  const [status, setStatus] = React.useState("new");
  const form = useForm<TGroupSubjectRecord>(groupSubjectService.clear());
  const record = useGroupSubjectRead(selected);
  const recordDel = useGroupSubjectDel();
  const recordUpdate = useGroupSubjectUpdate();
  const recordCreate = useGroupSubjectCreate();
  const schema = useGroupSubjectSchema();

  function showRecord(rec: any) {
    form.set(rec);
    if (isEmpty(rec[schema.data?.pk[0] || 999])) {
      setStatus("new");
    } else {
      setStatus("update");
    }
  }

  React.useEffect(() => {
    form.reset();
    if (record.data) {
      showRecord(record.data);
    }
  }, [record.data]);

  function handleClick(e: TEvent) {
    if (e.name === "novo") {
      showRecord(groupSubjectService.clear());
    }
    if (e.name === "excluir") {
      recordDel.mutate([selected]);
      showRecord(groupSubjectService.clear());
    }
    if (e.name === "salvar") {
      if (status === "update") recordUpdate.mutate([selected, form.record()]);
      if (status === "new") recordCreate.mutate([form.record()]);
      showRecord(groupSubjectService.clear());
    }
  }

  return (
    <section data-name="GroupSubjectForm" className="mt-2">
      <div className="space-x-2">
        {status}
        <Button
          className="w-20 bg-green-300"
          onClick={handleClick}
          name="novo"
          type="button"
        >
          Novo
        </Button>
        <Button
          className="w-20 bg-blue-300"
          onClick={handleClick}
          name="salvar"
          disabled={!form.isDirty()}
        >
          Salvar
        </Button>
        <Button
          className="w-20 bg-red-300"
          onClick={handleClick}
          name="excluir"
          disabled={form.isDirty()}
        >
          Excluir
        </Button>
      </div>
      <div className="flex flex-wrap gap-2">
        {schema.data?.fields.map((fld: TFieldClient) => (
          <Formfield
            label={fld.label}
            key={fld.field}
            {...form.field(fld.field as any).register()}
          />
        ))}
      </div>
    </section>
  );
}
