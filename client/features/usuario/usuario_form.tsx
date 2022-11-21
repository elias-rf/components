import React from "react";
import { TEvent, TFieldClient } from "../../../types";
import { isEmpty } from "../../../utils/identify/is_empty";
import { Button } from "../../components/button";
import { Formfield } from "../../components/form/formfield";
import {
  useUsuarioCreate,
  useUsuarioDel,
  useUsuarioRead,
  useUsuarioSchema,
  useUsuarioUpdate,
} from "../../hooks/use-usuario.hook";
import { useForm } from "../../lib/hooks/use-form.hook";
import { useQueryState } from "../../lib/hooks/use-query-state";
import { TUsuarioRecord, usuarioService } from "../../service/usuario.service";

export function UsuarioForm() {
  const [selected] = useQueryState("selected", []);
  const [status, setStatus] = React.useState("new");
  const form = useForm<TUsuarioRecord>(usuarioService.clear());
  const record = useUsuarioRead(selected);
  const recordDel = useUsuarioDel();
  const recordUpdate = useUsuarioUpdate();
  const recordCreate = useUsuarioCreate();
  const schema = useUsuarioSchema();

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

  function handleClick(e: TEvent) {
    if (e.name === "novo") {
      showRecord(usuarioService.clear());
    }
    if (e.name === "excluir") {
      recordDel.mutate([selected]);
      showRecord(usuarioService.clear());
    }
    if (e.name === "salvar") {
      if (status === "update") recordUpdate.mutate([selected, form.record()]);
      if (status === "new") recordCreate.mutate([form.record()]);
      showRecord(usuarioService.clear());
    }
  }

  return (
    <section className="mt-2" title="PhonebookForm">
      <div className="mt-2">
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
            type="submit"
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
      </div>
    </section>
  );
}
