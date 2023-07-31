import {
  Checkbox,
  FormField,
  FormFields,
  NumberField,
  RadioButton,
  Select,
  Switch,
  TextField,
  TextFieldMultiple,
} from "@/client/components/inputs";
import { Divider } from "@/client/components/ui";
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
    defaultValues: {
      Checkbox: true,
      Switch: true,
      RadioButton: "a1",
    },
  });

  const watchAllFields = form.watch();

  return (
    <>
      <FormFields>
        <FormField
          name="TextField"
          defaultValue={"a"}
          control={form.control}
          rules={{ required: "Requerido", minLength: 5 }}
          xs={12}
          sm={6}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }: any) => (
            <TextField
              label="TextField"
              required={required}
              disabled={disabled}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error ? true : false}
              helperText={error?.message}
            />
          )}
        />
        <FormField
          name="NumberField"
          defaultValue="1.1"
          control={form.control}
          rules={{ required: "Requerido", minLength: 5 }}
          xs={12}
          sm={6}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }: any) => (
            <NumberField
              label="NumberField"
              required={required}
              disabled={disabled}
              prefix="BRL "
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error ? true : false}
              helperText={error?.message}
            />
          )}
        />

        <FormField
          name="TextFieldMultiple"
          defaultValue={["a1"]}
          control={form.control}
          rules={{ required: "Requerido", minLength: 5 }}
          xs={12}
          sm={6}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }: any) => (
            <TextFieldMultiple
              label="TextFieldMultiple"
              items={["a1", "a2"]}
              labels={["A1", "A2"]}
              required={required}
              disabled={disabled}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error ? true : false}
              helperText={error?.message}
            />
          )}
        />

        <FormField
          name="Select"
          defaultValue="a1"
          control={form.control}
          rules={{ required: "Requerido", minLength: 5 }}
          xs={12}
          sm={6}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }: any) => (
            <Select
              label="Select"
              items={["a1", "a2", "a3"]}
              labels={["A1", "A2", "A3"]}
              required={required}
              disabled={disabled}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error ? true : false}
              helperText={error?.message}
            />
          )}
        />
        <FormField
          name="Checkbox"
          defaultValue={true}
          control={form.control}
          xs={12}
          sm={6}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }: any) => (
            <Checkbox
              label="Checkbox"
              required={required}
              disabled={disabled}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error ? true : false}
              helperText={error?.message}
            />
          )}
        />
        <FormField
          name="Switch"
          defaultValue={true}
          control={form.control}
          xs={12}
          sm={6}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }: any) => (
            <Switch
              label="Switch"
              required={required}
              disabled={disabled}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error ? true : false}
              helperText={error?.message}
            />
          )}
        />
        <FormField
          name="RadioButton"
          defaultValue="a1"
          control={form.control}
          xs={12}
          sm={6}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }: any) => (
            <RadioButton
              label="RadioButton"
              items={["a1", "a2", "a3"]}
              labels={["A1", "A2", "A3"]}
              required={required}
              disabled={disabled}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error ? true : false}
              helperText={error?.message}
            />
          )}
        />
      </FormFields>
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
