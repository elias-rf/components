import React from "react";
import { useMap } from "react-use";
import type {
  TAgendaTelefone,
  TAgendaTelefoneIds,
} from "../../../model/agenda-telefone/agenda-telefone.type";
import { stores } from "../../../model/stores";
import type { TEvent, TFieldClient } from "../../../types";
import { isEmpty } from "../../../utils/identify/is_empty";
import { isNumber } from "../../../utils/identify/is_number";
import { Button } from "../../components/button";
import { Label } from "../../components/form/label";
import { Textbox } from "../../components/form/textbox";

type TAgendaTelefoneFormProps = {
  id: TAgendaTelefoneIds;
};

const {
  getClear,
  getSchema,
  getRead,
  refreshList,
  setUpdate,
  setCreate,
  setDel,
} = stores.agendaTelefoneStore.getState();

export function AgendaTelefoneForm({ id }: TAgendaTelefoneFormProps) {
  const dataClear = stores.agendaTelefoneStore((state) => state.dataClear);
  const dataSchema = stores.agendaTelefoneStore((state) => state.dataSchema);
  const dataRead = stores.agendaTelefoneStore((state) => state.dataRead);
  const fetching = stores.agendaTelefoneStore((state) => state.fetching);
  const [record, actionsRecord] = useMap(dataClear);
  const [status, setStatus] = React.useState("new");
  const [isDirty, setIsDirty] = React.useState(false);

  // inicializa component
  React.useEffect(() => {
    getClear();
    getSchema();
  }, []);

  // atualiza state do form quando com o ID passado
  React.useEffect(() => {
    if (isEmpty(id) || !isNumber(id.agenda_telefone_id)) {
      return actionsRecord.setAll(dataClear);
    } else {
      getRead({ id });
    }
    setIsDirty(false);
  }, [id, dataClear]);

  // atualiza state do form quando for lido do servidor
  React.useEffect(() => {
    if (dataRead.agenda_telefone_id) {
      actionsRecord.setAll(dataRead);
      setStatus("update");
    }
  }, [dataRead]);

  //

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

  function handleRecordEdit(event: TEvent) {
    if (!isDirty) setIsDirty(true);
    actionsRecord.set(event.name as keyof TAgendaTelefone, event.value);
  }

  return (
    <section
      data-name="PhonebookForm"
      className={"mt-2"}
    >
      <div className={"flex flex-wrap gap-2"}>
        {dataSchema?.map((field: TFieldClient) => (
          <React.Fragment key={field.name}>
            <div className={"my-2"}>
              <Label name={field.name}>{field.label || ""}</Label>
              <Textbox
                type="text"
                name={field.name}
                onChangeEvent={handleRecordEdit}
                value={record[field.name as keyof TAgendaTelefone] || ""}
                data-testid={`input-${field.name}`}
              />
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className={"flex justify-end"}>
        <Button
          className={"w-20"}
          size="small"
          color="default"
          onClickEvent={handleButtonSave}
          name="salvar"
          disabled={!isDirty}
          data-testid="buttonSave"
        >
          Editar
        </Button>
        <Button
          className={"w-20"}
          size="small"
          color="default"
          onClickEvent={handleButtonSave}
          name="salvar"
          disabled={!isDirty}
          data-testid="buttonSave"
        >
          Salvar
        </Button>
      </div>
    </section>
  );
}

/*
load empty(id) = new, false
load !empty(id) = update, false
clickNew = new, false
clickDel = new, false
clickSave = update, false
clickKey = , true

*/
