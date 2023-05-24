import React from "react";
import { useMap } from "react-use";

import type { TFieldDef, TSelected } from "@/types";
import { isEmpty } from "@/utils/identify/is-empty";
import { isNumber } from "@/utils/identify/is-number";
import { Button } from "@mantine/core";
import { Label } from "../../components/form-old/label";
import { SpinnerIcon } from "../../components/spinner";
import { Textbox } from "../../components/textbox";

type TGroupSubjectFormProps = {
  id: TSelected;
};

export function GroupSubjectForm({ id }: TGroupSubjectFormProps) {
  const dataClear = React.useState();
  const dataSchema = React.useState();
  const dataRead = React.useState();
  const fetching = React.useState();
  const [record, actionsRecord] = useMap(dataClear);
  const [status, setStatus] = React.useState("new");
  const [isDirty, setIsDirty] = React.useState(false);

  React.useEffect(() => {
    getClear();
    getSchema();
  }, []);

  React.useEffect(() => {
    if (isEmpty(id) || !isNumber(id.agenda_telefone_id)) {
      return actionsRecord.setAll(dataClear);
    } else {
      getRead({ id });
    }
    setIsDirty(false);
  }, [id, dataClear]);

  React.useEffect(() => {
    if (dataRead.agenda_telefone_id) {
      actionsRecord.setAll(dataRead);
      setStatus("update");
    }
  }, [dataRead]);

  function handleButtonNew() {
    actionsRecord.setAll(dataClear);
    setStatus("new");
  }

  function handleButtonDel() {
    setDel({
      id: { agenda_telefone_id: record.agenda_telefone_id },
    })
      .then(() => {
        setIsDirty(false);
        setStatus("new");
        refreshList();
        return actionsRecord.setAll(dataClear);
      })
      .catch((errors) => console.log(errors));
  }

  function handleButtonSave() {
    if (status === "update") {
      setUpdate({
        id: { agenda_telefone_id: record.agenda_telefone_id },
        data: record,
      })
        .then(refreshList)
        .catch((err) => console.log(err));
    }
    if (status === "new") {
      setCreate({ data: record })
        .then(refreshList)
        .catch((err) => console.log(err));
    }
    actionsRecord.setAll(dataClear);
    setIsDirty(false);
    setStatus("new");
  }

  function handleRecordEdit(event: any) {
    if (!isDirty) setIsDirty(true);
    actionsRecord.set(event.name as keyof TAgendaTelefone, event.value);
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
          onClick={handleButtonNew}
          name="novo"
          data-testid="buttonNew"
        >
          Novo
        </Button>
        <Button
          className={"w-20"}
          size="small"
          color="primary"
          onClick={handleButtonSave}
          name="salvar"
          disabled={!isDirty}
          data-testid="buttonSave"
        >
          Salvar
        </Button>
        <Button
          className={"w-20"}
          size="small"
          color="red"
          onClick={handleButtonDel}
          name="excluir"
          disabled={isDirty}
          data-testid="buttonDel"
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
        {dataSchema?.map((field: TFieldDef) => (
          <React.Fragment key={field.name}>
            <div className={"my-2"}>
              <Label name={field.name}>{field.label || ""}</Label>
              <Textbox
                type="text"
                name={field.name}
                onChange={handleRecordEdit}
                value={record[field.name as keyof TGroupSubject] || ""}
                data-testid={`input-${field.name}`}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
