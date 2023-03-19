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
  onCreate?: (args: { new: TAgendaTelefone }) => void;
  onUpdate?: (args: { old: TAgendaTelefone; new: TAgendaTelefone }) => void;
  onDel?: (args: { old: TAgendaTelefone }) => void;
};

type TStatus = "edit" | "new" | "view";

const dataClear = recordClear(agendaTelefoneSchema);

export function AgendaTelefoneForm({
  id,
  onCreate,
  onUpdate,
  onDel,
}: TAgendaTelefoneFormProps) {
  const dataRead = trpc.agendaTelefone.read.useQuery({ id });
  const dataUpdate = trpc.agendaTelefone.update.useMutation();
  const dataCreate = trpc.agendaTelefone.create.useMutation();
  const dataDel = trpc.agendaTelefone.del.useMutation();
  const [status, setStatus] = React.useState<TStatus>("new");

  const methods = useForm({ defaultValues: dataClear });

  // atualiza state do form quando com o ID passado
  React.useEffect(() => {
    if (isEmpty(id) || !isNumber(id.agenda_telefone_id)) {
      return methods.reset(dataClear);
    }
  }, [id]);

  // atualiza state do form quando for lido do servidor
  React.useEffect(() => {
    if (dataRead.data && dataRead.data.agenda_telefone_id) {
      methods.reset(dataRead.data);
      setStatus("view");
    }
  }, [dataRead.data]);

  function handleButtonCancel() {
    setStatus("view");
    methods.reset();
    console.log("cancel");
  }

  function handleButtonEdit() {
    setStatus("edit");
  }

  function handleButtonNew() {
    setStatus("new");
    methods.reset(dataClear);
  }

  function handleButtonDel() {
    setStatus("view");
    dataDel.mutate(
      { id },
      {
        onSuccess: () => {
          dataRead.refetch();
          if (onDel) onDel({ old: dataRead });
        },
      }
    );
  }

  function handleButtonSave() {
    setStatus("view");
    if (status === "edit")
      dataUpdate.mutate(
        { id, data: methods.getValues() },
        {
          onSuccess: (data) => {
            if (onUpdate) onUpdate({ old: dataRead, new: data });
          },
        }
      );
    if (status === "new")
      dataCreate.mutate(
        { data: methods.getValues() },
        {
          onSuccess: (data) => {
            if (onCreate) onCreate({ new: data });
          },
        }
      );
  }

  const onSubmitHandler = (values: any) => {
    console.log(`Submitted`);
    console.log(values);
  };

  return (
    <section
      data-name="PhonebookForm"
      className={"mt-2"}
    >
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
      ) : (
        ""
      )}
      <div className={"flex flex-wrap gap-2"}>
        <FormProvider {...methods}>
          <form
            className="form"
            onSubmit={methods.handleSubmit(onSubmitHandler)}
            autoComplete="off"
          >
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
          </form>
        </FormProvider>
      </div>
      {status === "view" ? (
        ""
      ) : (
        <div className={"flex justify-end"}>
          {methods.formState.isDirty ? (
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
          ) : (
            ""
          )}
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
