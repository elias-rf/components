import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import { useForm } from "react-hook-form";
import { Checkbox } from "./checkbox";
import { Formfield } from "./formfield";
import { NumberField } from "./number-field";
import { RadioButton } from "./radio-button";
import { Select } from "./select";
import { Switch } from "./switch";
import { TextField } from "./text-field";
import { TextFieldMultiple } from "./text-field-multiple";

const meta: Meta<typeof TextField> = {
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

function InputAux() {
  const form = useForm({
    mode: "onTouched",
    defaultValues: {
      TextField: "a1",
      NumberField: "1.1",
      Checkbox: true,
      Switch: true,
      TextFieldMultiple: ["a1"],
      RadioButton: "a1",
      Select: "a1",
    },
  });
  const watchAllFields = form.watch();
  return (
    <>
      <Grid2
        container
        spacing={2}
      >
        <Formfield
          name="TextField"
          control={form.control}
          render={(field: any) => (
            <TextField
              label="TextField"
              {...field}
            />
          )}
        />
        <Formfield
          name="NumberField"
          control={form.control}
          render={(field: any) => (
            <NumberField
              label="NumberField"
              prefix="US$ "
              {...field}
            />
          )}
        />
        <Formfield
          name="Checkbox"
          control={form.control}
          render={(field: any) => (
            <Checkbox
              label="Checkbox"
              {...field}
            />
          )}
        />
        <Formfield
          name="Switch"
          control={form.control}
          render={(field: any) => (
            <Switch
              label="Switch"
              {...field}
            />
          )}
        />
        <Formfield
          name="TextFieldMultiple"
          control={form.control}
          render={(field: any) => (
            <TextFieldMultiple
              label="TextFieldMultiple"
              items={["a1", "a2"]}
              labels={["A1", "A2"]}
              {...field}
            />
          )}
        />
        <Formfield
          name="RadioButton"
          control={form.control}
          render={(field: any) => (
            <RadioButton
              label="RadioButton"
              items={["a1", "a2", "a3"]}
              labels={["A1", "A2", "A3"]}
              required={true}
              disabled={false}
              {...field}
            />
          )}
        />
        <Formfield
          name="Select"
          control={form.control}
          render={(field: any) => (
            <Select
              label="Select"
              items={["a1", "a2", "a3"]}
              labels={["A1", "A2", "A3"]}
              {...field}
            />
          )}
        />
      </Grid2>
      <JsonViewer value={{ values: watchAllFields, state: form.formState }} />
    </>
  );
}

export const Default: Story = {
  render: () => {
    return <InputAux />;
  },
};
