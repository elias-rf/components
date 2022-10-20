import React from "react";
import type { IEvent, SchemaField } from "../../../types";
import { TAgendaTelefone } from "../../../types/agenda-telefone.type";
import { isEmpty } from "../../../utils/is-empty";
import { Button } from "../../components/button";
import { Formfield } from "../../components/formfield";
import {
  usePhonebookCreate,
  usePhonebookDel,
  usePhonebookRead,
  usePhonebookSchema,
  usePhonebookUpdate,
} from "../../hooks/use-agenda-telefone.hook";
import { useForm } from "../../lib/hooks/use-form.hook";
import { useQueryState } from "../../lib/hooks/use-query-state";
import { agendaTelefoneService } from "../../service/agenda-telefone.service";

export function PhonebookForm() {
  const [selected] = useQueryState("selected", []);
  const [status, setStatus] = React.useState("new");
  const form = useForm<TAgendaTelefone>(agendaTelefoneService.clear());
  const record = usePhonebookRead(selected);
  const recordDel = usePhonebookDel();
  const recordUpdate = usePhonebookUpdate();
  const recordCreate = usePhonebookCreate();
  const schema = usePhonebookSchema();

  function showRecord(rec: any) {
    form.set(rec);
    if (isEmpty(rec.id)) {
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

  function handleClick(e: IEvent) {
    if (e.name === "novo") {
      showRecord(agendaTelefoneService.clear());
    }
    if (e.name === "excluir") {
      recordDel.mutate([selected]);
      showRecord(agendaTelefoneService.clear());
    }
    if (e.name === "salvar") {
      if (status === "update") recordUpdate.mutate([selected, form.record()]);
      if (status === "new") recordCreate.mutate([form.record()]);
      showRecord(agendaTelefoneService.clear());
    }
  }

  return (
    <section data-name="PhonebookForm" className="mt-2">
      <div className="space-x-2">
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
        {schema.data?.fields.map((fld: SchemaField) => (
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
