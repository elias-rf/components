import type { TFormJsonField } from "@/client/components/inputs";
import { FormJson, Switch, TextField } from "@/client/components/inputs";
import { Divider } from "@/client/components/ui";
import { day } from "@/utils/date/day";
import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import React from "react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof TextField> = {
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

function InputAux() {
  const [required, setRequired] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);

  const form = useForm({
    mode: "onTouched",
  });

  const watchAllFields = form.watch();

  const fieldsJson: TFormJsonField[] = [
    {
      name: "TextField",
      component: "TextField",
      label: "TextField",
      defaultValue: "a",
      required,
      xs: 2,
      rules: {
        required: "Requerido",
        minLength: { value: 5, message: "Mínimo 5 caracteres" },
      },
    },
    {
      name: "NumberField",
      component: "NumberField",
      label: "NumberField",
      defaultValue: "1.1",
      required,
      xs: 2,
      rules: {
        validate: (value: any) => {
          if (value >= 1 && value <= 2) {
            return true;
          }
          return "Deve estar entre 1 e 2";
        },
      },
    },
    {
      name: "DateField",
      component: "DateField",
      label: "DateField",
      defaultValue: "01012022",
      required,
      xs: 2,
      rules: {
        validate: (value: any) => {
          console.log(value);
          if (day(value, "DD/MM/YYYY", true).isValid()) {
            return true;
          }
          return "Data inválida";
        },
      },
    },
    {
      name: "TextFieldMultiple",
      component: "TextFieldMultiple",
      label: "TextFieldMultiple",
      defaultValue: ["a1"],
      required,
      items: ["a1", "a2"],
      labels: ["A1", "A2"],
      xs: 5,
    },
    {
      name: "Select",
      component: "Select",
      label: "Select",
      defaultValue: "a1",
      required,
      items: ["a1", "a2", "a3"],
      labels: ["A1", "A2", "A3"],
      xs: 3,
    },
    {
      name: "RadioButton",
      component: "RadioButton",
      label: "RadioButton",
      defaultValue: "a1",
      required,
      items: ["a1", "a2", "a3"],
      labels: ["A1", "A2", "A3"],
      xs: 3,
    },
    {
      name: "Checkbox",
      component: "Checkbox",
      label: "Checkbox",
      defaultValue: true,
      required,
      xs: 3,
    },
    {
      name: "Switch",
      component: "Switch",
      label: "Switch",
      defaultValue: true,
      required,
      xs: 3,
    },
  ];

  return (
    <>
      <FormJson
        form={form}
        fields={fieldsJson}
      />

      <Divider />
      <Switch
        label="required"
        value={required}
        onChange={(e: any) => setRequired(e)}
      />
      <Switch
        label="disabled"
        value={disabled}
        onChange={(e: any) => setDisabled(e)}
      />
      <JsonViewer value={{ values: watchAllFields }} />
    </>
  );
}

export const Default: Story = {
  render: () => {
    return <InputAux />;
  },
};
