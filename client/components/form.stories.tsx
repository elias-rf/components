import type { Story } from "@ladle/react";
import React from "react";
import { Schema } from "../../types";
import { Form } from "./form";

export default {
  title: "Form/Form",
  component: Form,
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

const Template: Story<typeof Form> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <Form
        {...props}
        dispatch={setDisp}
      />
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  schema,
  record: { quantidade: 12 },
};
