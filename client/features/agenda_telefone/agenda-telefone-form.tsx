import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useMap } from "react-use";
import type { TAgendaTelefoneIds } from "../../../model/agenda-telefone/agenda-telefone.type";
import { stores } from "../../../model/stores";
import { isEmpty } from "../../../utils/identify/is_empty";
import { isNumber } from "../../../utils/identify/is_number";
import { recordClear } from "../../../utils/schema/record-clear";
import { Button } from "../../components/button";
import { Field } from "../../components/field";
import { agendaTelefoneSchema } from "./agenda-telefone.schema";

type TAgendaTelefoneFormProps = {
  id: TAgendaTelefoneIds;
};

type TStatus = "edit" | "new" | "view";

const { getRead } = stores.agendaTelefoneStore.getState();
console.log(recordClear(agendaTelefoneSchema));
export function AgendaTelefoneForm({ id }: TAgendaTelefoneFormProps) {
  const dataClear = stores.agendaTelefoneStore((state) => state.dataClear);
  const dataRead = stores.agendaTelefoneStore((state) => state.dataRead);
  const [record, actionsRecord] = useMap(dataClear);
  const [status, setStatus] = React.useState<TStatus>("new");

  const methods = useForm();
  const [schema, setSchema] = React.useState(agendaTelefoneSchema);

  React.useEffect(() => {
    const dsbl = status === "view";

    for (const item of agendaTelefoneSchema) {
      item.disabled = dsbl;
    }
    setSchema(agendaTelefoneSchema);
  }, [status]);

  // atualiza state do form quando com o ID passado
  React.useEffect(() => {
    if (isEmpty(id) || !isNumber(id.agenda_telefone_id)) {
      return actionsRecord.setAll(dataClear);
    } else {
      getRead({ id });
    }
  }, [id, dataClear]);

  // atualiza state do form quando for lido do servidor
  React.useEffect(() => {
    if (dataRead.agenda_telefone_id) {
      actionsRecord.setAll(dataRead);
      setStatus("view");
    }
  }, [dataRead]);

  function handleButtonCancel() {
    setStatus("view");
    console.log("cancel");
  }

  function handleButtonEdit() {
    setStatus("edit");
  }

  function handleButtonDel() {
    setStatus("view");
  }

  function handleButtonSave() {
    setStatus("view");
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
      <div className={"flex justify-end"}>
        <Button
          className={"w-24 mr-4"}
          size="small"
          color="primary"
          onClick={handleButtonEdit}
          name="salvar"
          data-testid="buttonSave"
        >
          Editar
        </Button>
        <Button
          className={"w-24"}
          size="small"
          color="secondary"
          onClick={handleButtonDel}
          name="salvar"
          data-testid="buttonSave"
        >
          Excluir
        </Button>
      </div>
      <div className={"flex flex-wrap gap-2"}>
        <FormProvider {...methods}>
          <form
            className="form"
            onSubmit={methods.handleSubmit(onSubmitHandler)}
            autoComplete="off"
          >
            {schema.map((field) => (
              <React.Fragment key={field.name}>
                <Field
                  {...field}
                  key={field.name}
                />
              </React.Fragment>
            ))}
          </form>
        </FormProvider>
      </div>
      <div className={"flex justify-end"}>
        <Button
          className={"w-24 mr-4"}
          size="small"
          color="primary"
          onClick={handleButtonSave}
          name="salvar"
          data-testid="buttonSave"
        >
          Salvar
        </Button>
        <Button
          className={"w-24"}
          size="small"
          color="secondary"
          onClick={handleButtonCancel}
          name="salvar"
          data-testid="buttonCancel"
        >
          Cancelar
        </Button>
      </div>
    </section>
  );
}
