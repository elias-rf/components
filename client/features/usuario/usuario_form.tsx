import React from "react";
import { usuarioStore } from "../../../model/usuario/usuario.store";
import type { TField, TSelected } from "../../../types";
import { isEmpty } from "../../../utils/identify/is_empty";
import { Button } from "../../components/button";
import { Label } from "../../components/form/label";
import { Textbox } from "../../components/form/textbox";
import { LabelError } from "../../components/label_error";
import { SpinnerIcon } from "../../components/spinner";
import { useForm } from "../../lib/hooks/use_form";
import { isNumber } from "../../lib/valid/isNumber";

type TUsuarioFormProps = {
  id: TSelected;
};

export function UsuarioForm({ id }: TUsuarioFormProps) {
  const dataClear = usuarioStore((state) => state.dataClear);
  const getClear = usuarioStore((state) => state.getClear);
  const dataSchema = usuarioStore((state) => state.dataSchema);
  const getSchema = usuarioStore((state) => state.getSchema);
  const dataRead = usuarioStore((state) => state.dataRead);
  const getRead = usuarioStore((state) => state.getRead);
  const setCreate = usuarioStore((state) => state.setCreate);
  const setUpdate = usuarioStore((state) => state.setUpdate);
  const setDel = usuarioStore((state) => state.setDel);
  const fetching = usuarioStore((state) => state.fetching);
  const refreshList = usuarioStore((state) => state.refreshList);

  const [status, setStatus] = React.useState("new");
  const { values, setValues, errors, onChange, onInput, isDirty, schema } =
    useForm(dataSchema);

  React.useEffect(() => {
    getClear();
    getSchema();
  }, [getClear]);

  React.useEffect(() => {
    if (isEmpty(id) || !isNumber(id.usuario_id)) return showRecord(dataClear);
    getRead({ id });
  }, [id, getRead, dataClear]);

  React.useEffect(() => {
    setValues(dataRead);
  }, [dataRead]);

  function showRecord(rec: any) {
    let status = "update";
    setValues(rec);
    if (isEmpty(rec.usuario_id)) {
      status = "new";
    }
    setStatus(status);
  }

  async function updataRecord() {
    await setUpdate({
      id: { usuario_id: values.usuario_id },
      data: values,
    });
    refreshList();
  }

  function handleClick(e: any) {
    if (e.name === "novo") {
      showRecord(dataClear);
    }
    if (e.name === "excluir") {
      setDel({
        id: { usuario_id: values.usuario_id },
      });
      showRecord(dataClear);
    }
    if (e.name === "salvar") {
      if (status === "update") {
        updataRecord();
      }
      if (status === "new") setCreate({ data: values });
      showRecord(dataClear);
    }
  }

  return (
    <section
      data-name="PhonebookForm"
      className={"mt-2"}
    >
      <div className={"space-x-2"}>
        <Button
          className={"w-20"}
          size="small"
          color="green"
          onClick={handleClick}
          name="novo"
        >
          Novo
        </Button>
        <Button
          className={"w-20"}
          size="small"
          color="primary"
          onClick={handleClick}
          name="salvar"
          disabled={!isDirty}
        >
          Salvar
        </Button>
        <Button
          className={"w-20"}
          size="small"
          color="red"
          onClick={handleClick}
          name="excluir"
          disabled={isDirty}
        >
          Excluir
        </Button>
        <div className={"inline-block"}>
          <SpinnerIcon
            show={fetching}
            className={"text-xl"}
          />
        </div>
      </div>
      <div className={"flex flex-wrap gap-2"}>
        {schema
          ?.filter((field) => field.visible !== false)
          .map((field: TField) => (
            <React.Fragment key={field.name}>
              <div className={"my-2"}>
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
