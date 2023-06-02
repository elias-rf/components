import { zValidate, zd } from "@/utils/zod/zod";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import { useForm } from "./use-form";

const meta: Meta<typeof TextField> = {
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

const formFields = { t1: "t1.0", t2: "t2.0" };

const InputAux = () => {
  const onSubmit = (form: any) => {
    console.log("OnSubmit form", form);
  };
  const onInput = (form: any) => {
    console.log("OnInput form", form);
  };
  const form = useForm({
    onSubmit,
    onInput,
    initialValues: formFields,
  });

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
      >
        <Stack spacing={2}>
          <TextField
            label="T1"
            required
            {...form.getInputProps("t1", zValidate(zd.string().min(4)))}
          />

          <TextField
            label="T2"
            required
            {...form.getInputProps("t2", zValidate(zd.string().min(4)))}
          />

          <TextField
            label="T3"
            required
            {...form.getInputProps("t3", zValidate(zd.string().min(4)))}
          />
          <button onClick={() => form.submit()}>Submit</button>
          <button onClick={() => form.reset()}>Reset</button>
          <button onClick={() => form.reset(form.values)}>Reset New</button>
          <button onClick={() => form.validate()}>Validate</button>
        </Stack>

        <JsonViewer
          value={{
            values: form.values,
            errors: form.errors,
            dirty: form.dirty,
            valid: form.valid,
            initials: form.initials,
          }}
        />
      </Stack>
    </>
  );
};

export const Default: Story = {
  render: () => {
    return <InputAux />;
  },
};
