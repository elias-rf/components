import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { fetchMockRpc } from "../../../utils/api/fetch-mock-rpc";
import { useForm } from "../../lib/hooks/use_form";
import { agendaTelefoneService } from "../../service/agenda_telefone.service";
import { LabelError } from "../label_error";
import { Form } from "./form";
import { Label } from "./label";
import { Textbox } from "./textbox";

// eslint-disable-next-line
// @ts-ignore
// eslint-disable-next-line
fetch = fetchMockRpc.fetch;

fetchMockRpc.mock("crudSchema", {
  body: {
    result: [
      {
        allowNull: false,
        field: "id",
        label: "Ramal",
        name: "agenda_telefone_id",
        primaryKey: true,
        type: "int",
      },
      {
        allowNull: false,
        field: "name",
        label: "Nome",
        name: "nome",
        type: "string",
      },
      {
        field: "department",
        label: "Setor",
        name: "setor",
        type: "string",
      },
      {
        field: "email",
        label: "Email",
        name: "email",
        type: "string",
      },
    ],
  },
});

export default {
  title: "Components/Form/Form",
  component: Form,
  argTypes: {
    showValues: { monitor: "fields" },
  },
} as ComponentMeta<typeof Form>;

export const Default: ComponentStory<typeof Form> = (props: any) => {
  const { values, errors, onChange, onInput, schema } = useForm(
    agendaTelefoneService.schema()
  );

  return (
    <div>
      {schema?.map((field) => (
        <React.Fragment key={field.name}>
          <div className="my-2">
            <Label name={field.name}>{field.label || field.name}</Label>
            <Textbox
              type="text"
              name={field.name}
              onChange={onChange}
              onInput={onInput}
              value={values[field.name]}
            />
            <LabelError>{errors[field.name]}</LabelError>
          </div>
        </React.Fragment>
      ))}
      <button onClick={() => props.showValues(values)}>Atualizar</button>
    </div>
  );
};

Default.storyName = "Form";
