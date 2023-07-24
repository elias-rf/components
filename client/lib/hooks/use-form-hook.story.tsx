import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import type { Meta, StoryObj } from "@storybook/react";
import { JsonViewer } from "@textea/json-viewer";
import { useForm } from "react-hook-form";

const meta: Meta<typeof TextField> = {
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof TextField>;

const formFields = { t1: "t1.0", t2: "t2.0", t3: "t3.0" };

const InputAux = () => {
  const form = useForm({ mode: "onTouched", defaultValues: formFields });

  const onSubmit = (form: any) => {
    console.log("OnSubmit form", form);
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
      >
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextField
              label="T1"
              variant="filled"
              size="small"
              required
              error={!!form.formState.errors.t1}
              helperText={form.formState.errors.t1?.message}
              {...form.register("t1", {
                required: "tem que ter algo!",
                minLength: {
                  value: 4,
                  message: "mínimo 4", // JS only: <p>error message</p> TS only support string
                },
              })}
            />

            <TextField
              label="T2"
              variant="filled"
              size="small"
              required
              error={!!form.formState.errors.t2}
              helperText={form.formState.errors.t2?.message}
              {...form.register("t2", { required: true })}
            />

            <TextField
              label="T3"
              variant="filled"
              size="small"
              required
              error={!!form.formState.errors.t3}
              helperText={form.formState.errors.t3?.message}
              {...form.register("t3", { required: true })}
            />
            <Button
              variant="contained"
              disabled={!form.formState.isValid || form.formState.isSubmitted}
              onClick={() => form.handleSubmit(onSubmit)()}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              disabled={!!form.formState.isValid}
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button
              variant="contained"
              onClick={() => form.reset(form.getValues())}
            >
              Reset New
            </Button>
            <Button
              variant="contained"
              onClick={() => form.trigger()}
            >
              Validate
            </Button>
          </Stack>
        </form>
        <JsonViewer
          value={{
            formState: {
              isDirty: form.formState.isDirty,
              dirtyFields: form.formState.dirtyFields,
              touchedFields: form.formState.touchedFields,
              defaultValues: form.formState.defaultValues,
              isSubmitted: form.formState.isSubmitted,
              isSubmitSuccessful: form.formState.isSubmitSuccessful,
              isSubmitting: form.formState.isSubmitting,
              isLoading: form.formState.isLoading,
              submitCount: form.formState.submitCount,
              isValid: form.formState.isValid,
              isValidating: form.formState.isValidating,
              errors: form.formState.errors,
            },
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
