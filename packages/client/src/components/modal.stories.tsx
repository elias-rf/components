import { ComponentStory } from "@storybook/react";
import { Modal } from "./modal";

export default {
  title: "Modal",
  component: Modal,
};

const Template: ComponentStory<typeof Modal> = (props: any) => (
  <Modal {...props} />
);

export const Default = Template.bind({});

Default.args = {
  show: true,
  children: `Mensagem`,
};
