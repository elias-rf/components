import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { fetchMockRpc } from "../../../mocks/fetch-mock-rpc";
import { agendaTelefoneService } from "../../../model/agenda-telefone/agenda-telefone.service";
import { useForm } from "../../lib/hooks/use_form";
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

const meta: Meta<typeof Form> = {
  component: Form,
  argTypes: {
    showValues: { monitor: "fields" },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

function FormState(props: any) {
  const { values, errors, onChangeEvent, onInputEvent, schema } = useForm(
    agendaTelefoneService.query.schema
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
              onChange={onChangeEvent}
              onInput={onInputEvent}
              value={values[field.name]}
            />
            <LabelError>{errors[field.name]}</LabelError>
          </div>
        </React.Fragment>
      ))}
      <button onClick={() => props.showValues(values)}>Atualizar</button>
    </div>
  );
}

export const Default: Story = {
  render: (props) => <FormState {...props} />,
};
