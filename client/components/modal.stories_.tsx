import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./modal";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    show: true,
    children: `Mensagem`,
  },
  render: (props: any) => <Modal {...props} />,
};
