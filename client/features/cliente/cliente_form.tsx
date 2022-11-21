import { useQuery } from "@tanstack/react-query";
import React from "react";
import type { TFieldClient, TSelected } from "../../../types";
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
  const record = useQuery({
    queryKey: ["cliente", "get", selected],
    queryFn: async ({ queryKey }) => {
      const selected = queryKey[2] as TSelected;
      if (isEmpty(selected) || !isNumber(selected.cliente_id)) return {};
      return clienteService.read(queryKey[2] as TSelected);
    },
    onSuccess: (data: any) => {
      showRecord(data);
    },
  });

  const { values, setValues, errors, onChange, onInput, isDirty, schema } =
    useForm(clienteService.schema());

  function showRecord(rec: any) {
    setValues(rec);
  }

  return (
    <section data-name="PhonebookForm" className="mt-2">
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
