import React from "react";
import type { TFieldClient, TSelected } from "../../../types";
import { isEmpty } from "../../../utils/identify/is_empty";
import { Button } from "../../components/button";
import { TButtonEvent } from "../../components/button/button.types";
import { Label } from "../../components/form/label";
import { Textbox } from "../../components/form/textbox";
import { LabelError } from "../../components/label_error";
import { SpinnerIcon } from "../../components/spinner";
import { useForm } from "../../lib/hooks/use_form";
import { usuarioService } from "../../service/usuario.service";

type TUsuarioFormProps = {
  id: TSelected;
};

export function UsuarioForm({ id }: TUsuarioFormProps) {
  const [clear, setClear] = React.useState({});
  const [fetching, setFetching] = React.useState(false);
  const [status, setStatus] = React.useState("new");
  const {
    values,
    setValues,
    errors,
    onChangeEvent,
    onInputEvent,
    isDirty,
    schema,
  } = useForm(usuarioService.schema());

  React.useEffect(() => {
    async function getClear() {
      const rsp = await usuarioService.clear();
      setClear(rsp);
    }
    getClear();
  }, []);

  React.useEffect(() => {
    async function getRecord() {
      if (isEmpty(id) || id.usuario_id === 0) return showRecord(clear);
      setFetching(true);
      const rsp = await usuarioService.read({ id });
      showRecord(rsp);
      setFetching(false);
    }
    getRecord();
  }, [id]);

  function showRecord(rec: any) {
    let status = "update";
    setValues(rec);
    if (isEmpty(rec.usuario_id)) {
      status = "new";
    }
    setStatus(status);
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
        {schema
          ?.filter((field) => field.visible !== false)
          .map((field: TFieldClient) => (
            <React.Fragment key={field.name}>
              <div className="my-2">
                <Label name={field.name}>{field.label || ""}</Label>
                <Textbox
                  type="text"
                  name={field.name}
                  onChange={onChangeEvent}
                  onInput={onInputEvent}
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
