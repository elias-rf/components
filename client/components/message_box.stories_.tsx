import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { MessageBox } from "./message_box";

const meta: Meta<typeof MessageBox> = {
  title: "MessageBox",
  component: MessageBox,
  argTypes: { onInputEvent: { action: "onInputEvent" } },
};

export default meta;
type Story = StoryObj<typeof MessageBox>;

function MessageBoxState() {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <MessageBox
        title="Titulo"
        onInputEvent={setDisp}
        option1="OK"
        option2="Cancel"
        option3="Close"
      >
        Mensagem
      </MessageBox>
      <div>{JSON.stringify(disp)}</div>
    </>
  );
}

export const Default: Story = {
  render: () => <MessageBoxState />,
};
