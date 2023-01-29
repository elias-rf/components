import React from "react";
import type { TFieldClient, TSelected } from "../../../types";
import { cache } from "../../../utils/cache";
import { isEmpty } from "../../../utils/identify/is_empty";
import { isNumber } from "../../../utils/identify/is_number";
import { Button } from "../../components/button";
import { TButtonEvent } from "../../components/button/button.types";
import { Label } from "../../components/form/label";
import { LabelError } from "../../components/label_error";
import { SpinnerIcon } from "../../components/spinner";
import { Textbox } from "../../components/textbox";
import { useForm } from "../../lib/hooks/use-form.hook";
import { groupSubjectService } from "../../service/group-subject.service";

type TGroupSubjectFormProps = {
  id: TSelected;
};

export function GroupSubjectForm({ id }: TGroupSubjectFormProps) {
  const [clear, setClear] = React.useState({});
  const [fetching, setFetching] = React.useState(false);
  const [status, setStatus] = React.useState("new");
  const { values, setValues, errors, onChange, onInput, isDirty, schema } =
    useForm(
      cache.fetch({
        key: "groupSubjectService.schema",
        callback: groupSubjectService.schema,
        expiresInSeconds: 3600,
        debug: true,
      })
    );

  React.useEffect(() => {
    async function getClear() {
      const rsp = await cache.fetch({
        key: "groupSubjectService.clear",
        callback: groupSubjectService.clear,
        expiresInSeconds: 3600,
        debug: true,
      });
      setClear(rsp);
    }
    getClear();
  }, []);

  React.useEffect(() => {
    async function getRecord() {
      if (isEmpty(id) || !isNumber(id.agenda_telefone_id)) showRecord(clear);
      setFetching(true);
      const rsp = await cache.fetch({
        key: "groupSubjectService.read",
        callback: groupSubjectService.read,
        args: [id],
        expiresInSeconds: 10,
        debug: true,
      });
      showRecord(rsp);
      setFetching(false);
    }
    getRecord();
  }, [id]);

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
