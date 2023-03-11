import React from "react";
import { clienteStore } from "../../../model/cliente/cliente.store";
import { TClienteIds } from "../../../model/cliente/cliente.type";
import type { TFieldClient } from "../../../types";
import { isEmpty } from "../../../utils/identify/is_empty";
import { isNumber } from "../../../utils/identify/is_number";
import { Label } from "../../components/form";
import { Textbox } from "../../components/form/textbox";
import { useForm } from "../../lib/hooks/use_form";

type TClienteFormProps = {
  id: TClienteIds;
};

const { getClear, getSchema, getRead } = clienteStore.getState();

export function ClienteForm({ id }: TClienteFormProps) {
  const dataClear = clienteStore((state) => state.dataClear);

  const dataSchema = clienteStore((state) => state.dataSchema);

  const dataRead = clienteStore((state) => state.dataRead);

  const { values, setValues, onChangeEvent, onInputEvent } =
    useForm(dataSchema);

  React.useEffect(() => {
    getClear();
    getSchema();
  }, [getClear]);

  React.useEffect(() => {
    if (isEmpty(id) || !isNumber(id.cliente_id)) return showRecord(dataClear);
    getRead({ id });
  }, [id, getRead, dataClear]);

  React.useEffect(() => {
    setValues(dataRead);
  }, [dataRead]);

  function showRecord(rec: any) {
    setValues(rec);
  }

  return (
    <section
      data-name="PhonebookForm"
      className={"mt-2"}
    >
      <div className={"flex flex-col"}>
        <div className={"flex flex-wrap gap-2"}>
          {dataSchema?.map((field: TFieldClient) => (
            <React.Fragment key={field.name}>
              <div className={"my-2"}>
                <Label name={field.name}>{field.label || ""}</Label>
                <Textbox
                  type="text"
                  name={field.name}
                  onChange={onChangeEvent}
                  onInput={onInputEvent}
                  value={values[field.name] || ""}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
