import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import type {
  TAgendaTelefone,
  TAgendaTelefoneIds,
} from "../../../model/agenda-telefone/agenda-telefone.type";
import { isEmpty } from "../../../utils/identify/is_empty";
import { isNumber } from "../../../utils/identify/is_number";
import { recordClear } from "../../../utils/schema/record-clear";
import { Button } from "../../components/button";
import { Field } from "../../components/field";
import { trpc } from "../../lib/fetch-trpc";
import { agendaTelefoneSchema } from "./agenda-telefone.schema";

type TAgendaTelefoneFormProps = {
  id: TAgendaTelefoneIds;
  onCreate?: (rec: TAgendaTelefone) => void;
  onUpdate?: (rec: TAgendaTelefone) => void;
  onDel?: (ok: number) => void;
};

type TStatus = "edit" | "new" | "view";

const dataClear = recordClear(agendaTelefoneSchema);

export function AgendaTelefoneForm({
  id,
  onCreate,
  onUpdate,
  onDel,
}: TAgendaTelefoneFormProps) {
  const utils = trpc.useContext();
  const dataRead = trpc.agendaTelefone.read.useQuery({ id });

  const dataUpdate = trpc.agendaTelefone.update.useMutation({
    onSuccess: (rec) => {
      utils.agendaTelefone.invalidate();
      if (onUpdate) onUpdate(rec);
    },
  });
  const dataCreate = trpc.agendaTelefone.create.useMutation({
    onSuccess: (rec) => {
      utils.agendaTelefone.invalidate();
      if (onCreate) onCreate(rec);
    },
  });
  const dataDel = trpc.agendaTelefone.del.useMutation({
    onSuccess: (ok) => {
      utils.agendaTelefone.invalidate();
      if (onDel) onDel(ok);
    },
  });

  const [status, setStatus] = React.useState<TStatus>("new");

  const formMethods = useForm({ defaultValues: dataClear });

  // atualiza state do form quando com o ID passado
  React.useEffect(() => {
    if (isEmpty(id) || !isNumber(id.agenda_telefone_id)) {
      return formMethods.reset(dataClear);
    }
  }, [id]);

  // atualiza state do form quando for lido do servidor
  React.useEffect(() => {
    if (dataRead.data && dataRead.data.agenda_telefone_id) {
      formMethods.reset(dataRead.data);
      setStatus("view");
    }
  }, [dataRead.data]);

  function handleButtonCancel() {
    setStatus("view");
    formMethods.reset();
    console.log("cancel");
  }

  function handleButtonEdit() {
    setStatus("edit");
  }

  function handleButtonNew() {
    setStatus("new");
    formMethods.reset(dataClear);
  }

  function handleButtonDel() {
    setStatus("view");
    dataDel.mutate({ id });
  }

  function handleButtonSave() {
    setStatus("view");
    if (status === "edit")
      dataUpdate.mutate({ id, data: formMethods.getValues() });
    if (status === "new") dataCreate.mutate({ data: formMethods.getValues() });
  }

  const onSubmitHandler = (values: any) => {
    console.log(`Submitted`);
    console.log(values);
  };

  return (
    <section className={"mt-2"}>
      {status === "view" ? (
        <div className={"flex justify-end"}>
          <Button
            className={"w-24 mr-4"}
            size="small"
            color="primary"
            onClick={handleButtonEdit}
            name="edit"
            data-testid="buttonEdit"
          >
            Editar
          </Button>
          <Button
            className={"w-24 mr-4"}
            size="small"
            color="secondary"
            onClick={handleButtonNew}
            name="new"
            data-testid="buttonNew"
          >
            Novo
          </Button>
          <Button
            className={"w-24"}
            size="small"
            color="secondary"
            onClick={handleButtonDel}
            name="del"
            data-testid="buttonDel"
          >
            Excluir
          </Button>
        </div>
      ) : null}
      <FormProvider {...formMethods}>
        <form
          className="form"
          onSubmit={formMethods.handleSubmit(onSubmitHandler)}
          autoComplete="off"
        >
          <div className={"sm:flex flex-wrap gap-2"}>
            {agendaTelefoneSchema.map((field) => (
              <React.Fragment key={field.name}>
                <Field
                  type="text"
                  {...field}
                  disabled={status === "view"}
                  key={field.name}
                />
              </React.Fragment>
            ))}
          </div>
        </form>
      </FormProvider>
      {status === "view" ? null : (
        <div className={"flex justify-end"}>
          {formMethods.formState.isDirty ? (
            <Button
              className={"w-24 mr-4"}
              size="small"
              color="primary"
              onClick={handleButtonSave}
              name="save"
              data-testid="buttonSave"
            >
              Salvar
            </Button>
          ) : null}
          <Button
            className={"w-24"}
            size="small"
            color="secondary"
            onClick={handleButtonCancel}
            name="cancel"
            data-testid="buttonCancel"
          >
            Cancelar
          </Button>
        </div>
      )}
    </section>
  );
}
