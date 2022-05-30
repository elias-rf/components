import Form from ".";
import React from "react";
import { Action, Schema } from "../../../..";
import type { Story } from "@ladle/react";

export default {
  title: "Form/Form",
};

const schema: Schema = {
  pk: ["id"],
  fields: [
    {
      field: "quantidade",
      label: "Quant",
      type: "int",
      fieldClass: "w-16",
    },
    {
      field: "produto",
      label: "Prod",
      type: "string",
      fieldClass: "text-left",
    },
    {
      field: "valor",
      label: "Vlr",
      type: "currency",
      fieldClass: "text-left",
    },
    {
      field: "enabled",
      label: "Enabled",
      type: "boolean",
      fieldClass: "text-left",
    },
  ],
};

const Template: Story = (args: any) => <Form {...args} />;

export const Default = Template.bind({});

Default.args = {
  dispatch: (action: Action) => console.log(action),
  schema,
  record: {},
};

export const Default2 = () => {
  const [record, setRecord] = React.useState({
    quantidade: 1,
    produto: "item",
    valor: 2.3,
    enabled: true,
  });
  const [errors, setErrors] = React.useState({ valor: "deve ser positivo" });

  function handleChange(action: Action) {
    setRecord({ ...record, [action.payload.field]: action.payload.value });
    console.log(action);
  }

  return (
    <Form
      dispatch={handleChange}
      errors={errors}
      record={record}
      schema={schema}
    ></Form>
  );
};
