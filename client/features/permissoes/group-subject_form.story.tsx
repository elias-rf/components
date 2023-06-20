import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { GroupSubjectForm } from "./group-subject_form";

const meta: Meta<typeof GroupSubjectForm> = {
  component: GroupSubjectForm,
};

export default meta;
type Story = StoryObj<typeof GroupSubjectForm>;

function GroupSubjectFormStory() {
  const form = useForm({
    mode: "onTouched",
    defaultValues: { agenda_telefone_id: "", nome: "", setor: "", email: "" },
  });
  return (
    <GroupSubjectForm
      form={form}
      status={"view"}
    />
  );
}

export const Form: Story = {
  render: () => <GroupSubjectFormStory />,
};
