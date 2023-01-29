import React from "react";
import type { TFieldClient } from "../../../types";
import { TAgendaTelefoneIds } from "../../../types/agenda-telefone.type";
import { isEmpty } from "../../../utils/identify/is_empty";
import { isNumber } from "../../../utils/identify/is_number";
import { Button } from "../../components/button";
import { TButtonEvent } from "../../components/button/button.types";
import { Label } from "../../components/form/label";
import { Textbox } from "../../components/form/textbox";
import { LabelError } from "../../components/label_error";
import { SpinnerIcon } from "../../components/spinner";
import { useForm } from "../../lib/hooks/use_form";
import {
  agendaTelefoneService,
  agendaTelefoneStore,
} from "../../service/agenda-telefone.service";

type TAgendaTelefoneFormProps = {
  id: TAgendaTelefoneIds;
};

export function AgendaTelefoneForm({ id }: TAgendaTelefoneFormProps) {
  const getClear = agendaTelefoneStore((state) => state.getClear);
  const dataClear = agendaTelefoneStore((state) => state.dataClear);
  const getSchema = agendaTelefoneStore((state) => state.getSchema);
  const getRead = agendaTelefoneStore((state) => state.getRead);
  const dataRead = agendaTelefoneStore((state) => state.dataRead);
  const refreshList = agendaTelefoneStore((state) => state.refreshList);
  const fetching = agendaTelefoneStore((state) => state.fetching);

  const [status, setStatus] = React.useState("new");
  const {
    values,
    setValues,
    errors,
    onChangeEvent,
    onInputEvent,
    isDirty,
    schema,
  } = useForm(getSchema);

  React.useEffect(() => {
    getClear();
  }, [getClear]);

  React.useEffect(() => {
    if (isEmpty(id) || !isNumber(id.agenda_telefone_id))
      return showRecord(dataClear);
    getRead({ id });
  }, [id, getRead, dataClear]);

  React.useEffect(() => {
    setValues(dataRead);
  }, [dataRead]);

  function showRecord(rec: any) {
    let status = "update";
    setValues(rec);
    if (isEmpty(rec.agenda_telefone_id)) {
      status = "new";
    }
    setStatus(status);
  }

  async function updataRecord() {
    await agendaTelefoneService.mutation.agendaTelefoneUpdate({
      id: { agenda_telefone_id: values.agenda_telefone_id },
      data: values,
    });
    refreshList();
  }

  function handleClick(e: TButtonEvent) {
    if (e.name === "novo") {
      showRecord(dataClear);
    }
    if (e.name === "excluir") {
      agendaTelefoneService.mutation.agendaTelefoneDel({
        id: { agenda_telefone_id: values.agenda_telefone_id },
      });
      showRecord(dataClear);
    }
    if (e.name === "salvar") {
      if (status === "update") {
        updataRecord();
      }
      if (status === "new")
        agendaTelefoneService.mutation.agendaTelefoneCreate({ data: values });
      showRecord(dataClear);
    }
  }

  return (
    <section
      data-name="PhonebookForm"
      className="mt-2"
    >
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
          <SpinnerIcon
            show={fetching}
            className="text-xl"
          />
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
                onChangeEvent={onChangeEvent}
                onInputEvent={onInputEvent}
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
