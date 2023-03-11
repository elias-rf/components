import type { Meta, StoryObj } from "@storybook/react";
import { GroupSubjectForm } from "./group-subject-form";

const meta: Meta<typeof GroupSubjectForm> = {
  component: GroupSubjectForm,
  args: {
    id: { group_id: "dev", subject_id: "/" },
  },
};

export default meta;
type Story = StoryObj<typeof GroupSubjectForm>;

function FormState(props: any) {
  return <GroupSubjectForm id={props.id} />;
}

export const Form: Story = { render: (props) => <FormState {...props} /> };
