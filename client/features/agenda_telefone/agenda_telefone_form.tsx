import { useQuery } from "@tanstack/react-query";
import React from "react";
import type { TFieldClient, TSelected } from "../../../types";
import { isEmpty } from "../../../utils/identify/is_empty";
import { isNumber } from "../../../utils/identify/is_number";
import { Button } from "../../components/button";
import { TButtonEvent } from "../../components/button/button.types";
import { Label } from "../../components/form/label";
import { Textbox } from "../../components/form/textbox";
import { LabelError } from "../../components/label_error";
import { SpinnerIcon } from "../../components/spinner";
import { useForm } from "../../lib/hooks/use_form";
import { agendaTelefoneService } from "../../service/agenda_telefone.service";

type TAgendaTelefoneFormProps = {
  id: TSelected;
};

export function AgendaTelefoneForm({ id }: TAgendaTelefoneFormProps) {
  const clear = useQuery({
    queryKey: ["agenda_telefone", "clear"],
    queryFn: agendaTelefoneService.clear,
  });

  const record = useQuery({
    queryKey: ["agenda_telefone", "get", id],
    queryFn: async ({ queryKey }) => {
      const ident = queryKey[2] as TSelected;
      if (isEmpty(ident) || !isNumber(ident.agenda_telefone_id)) return {};
      return agendaTelefoneService.read(queryKey[2] as TSelected);
    },
    onSuccess: (data: any) => {
      showRecord(data);
    },
  });

  const { values, setValues, errors, onChange, onInput, isDirty, schema } =
    useForm(agendaTelefoneService.schema());

  const [status, setStatus] = React.useState("new");

  function showRecord(rec: any) {
    setValues(rec);
    if (isEmpty(rec.id)) {
      setStatus("new");
    } else {
      setStatus("update");
    }
  }

  function handleClick(e: TButtonEvent) {
    if (e.name === "novo") {
      showRecord(clear);
    }
    if (e.name === "excluir") {
      // recordDel.mutate([selected]);
      console.log("del", id);
      showRecord(clear);
    }
    if (e.name === "salvar") {
      if (status === "update") console.log("update", values); // recordUpdate.mutate([selected, form.record()]);
      if (status === "new") console.log("create", values); // recordCreate.mutate([form.record()]);
      showRecord(clear);
    }
  }

  return (
    <section data-name="PhonebookForm" className="mt-2">
      <div className="space-x-2">
        <Button
          className="w-20"
          size="sm"
          color="green"
          onClickEvent={handleClick}
          name="novo"
        >
          Novo
        </Button>
        <Button
          className="w-20"
          size="sm"
          color="default"
          onClickEvent={handleClick}
          name="salvar"
          disabled={!isDirty}
        >
          Salvar
        </Button>
        <Button
          className="w-20"
          size="sm"
          color="red"
          onClickEvent={handleClick}
          name="excluir"
          disabled={isDirty}
        >
          Excluir
        </Button>
        <div className="inline-block">
          <SpinnerIcon show={record.isFetching} className="text-xl" />
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {schema?.map((field: TFieldClient) => (
          <React.Fragment key={field.name}>
            <div className="my-2">
              <Label name={field.name}>{field.label || ""}</Label>
              <Textbox
                type="text"
                name={field.name}
                onChange={onChange}
                onInput={onInput}
                value={values[field.name] || ""}
              />
              <LabelError>{errors[field.name]}</LabelError>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
