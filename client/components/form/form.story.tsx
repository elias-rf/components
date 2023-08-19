import {
  ButtonCancel,
  ButtonDel,
  ButtonEdit,
  ButtonNew,
  ButtonSave,
} from "@/client/components/form";
import { TextField } from "@/client/components/inputs/text-field";
import { Box, Stack } from "@mui/material";
import type { TFormStatus } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { useForm } from "react-hook-form";

const meta: Meta<typeof Box> = {
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

function FormStory() {
  const [status, setStatus] = React.useState<TFormStatus>("view");
  const form = useForm({
    mode: "onTouched",
    defaultValues: { fld1: "1", fld2: "2" },
  });

  function handleOnCreate() {
    console.log("create");
    form.reset({ fld1: "", fld2: "" });
    setStatus("new");
  }
  function handleOnEdit() {
    form.reset({ fld1: "1", fld2: "2" });
    console.log("edit");
  }

  async function handleOnDel() {
    console.log("del ok");
    form.reset({ fld1: "", fld2: "" });
  }

  async function handleOnSave() {
    const data = form.getValues();
    console.log("save", data);
    form.reset(data);
  }

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
      >
        <ButtonEdit
          onClick={handleOnEdit}
          form={form}
          status={status}
          onStatus={setStatus}
        />
        <ButtonNew
          onClick={handleOnCreate}
          form={form}
          status={status}
          onStatus={setStatus}
        />
        <ButtonDel
          onClick={handleOnDel}
          form={form}
          status={status}
          onStatus={setStatus}
        />
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          required
          size="small"
          variant="filled"
          sx={{ width: 100 }}
          disabled={status === "view"}
          label={"Field 1"}
          {...form.register("fld1")}
        />
        <TextField
          required
          size="small"
          variant="filled"
          disabled={status === "view"}
          label={"Field 2"}
          {...form.register("fld2")}
        />
      </Box>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
      >
        <ButtonSave
          form={form}
          onStatus={setStatus}
          onClick={handleOnSave}
        />
        <ButtonCancel
          form={form}
          status={status}
          onStatus={setStatus}
          onClick={() => null}
        />
      </Stack>
    </>
  );
}

export const Default: Story = {
  render: () => <FormStory />,
};
