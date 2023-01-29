import React from "react";
import type { TFieldClient, TSelected } from "../../../types";
import { cache } from "../../../utils/cache";
import { isEmpty } from "../../../utils/identify/is_empty";
import { isNumber } from "../../../utils/identify/is_number";
import { Label } from "../../components/form";
import { Textbox } from "../../components/form/textbox";
import { useForm } from "../../lib/hooks/use_form";
import { clienteService } from "../../service/cliente.service";

type TClienteFormProps = {
  selected: TSelected;
};

export function ClienteForm({ selected }: TClienteFormProps) {
  const { values, setValues, onChange, onInput, schema } = useForm(
    cache.fetch({
      key: "clienteService.schema",
      callback: clienteService.schema,
      expiresInSeconds: 3600,
      debug: true,
    })
  );

  React.useEffect(() => {
    async function getRecord() {
      if (isEmpty(selected) || !isNumber(selected.cliente_id)) showRecord({});
      const data = await cache.fetch({
        key: "agendaTelefoneService.read",
        callback: clienteService.read,
        args: [selected],
        expiresInSeconds: 10,
        debug: true,
      });
      showRecord(data);
    }
    getRecord();
  }, [selected]);

  function showRecord(rec: any) {
    setValues(rec);
  }

  return (
    <section
      data-name="PhonebookForm"
      className="mt-2"
    >
      <div className="flex flex-col">
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
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
