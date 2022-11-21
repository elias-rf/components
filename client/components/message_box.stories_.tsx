import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { MessageBox } from "./message_box";

export default {
  title: "MessageBox",
  component: MessageBox,
  argTypes: { dispatch: { action: "dispatch" } },
} as ComponentMeta<typeof MessageBox>;

export const Default: ComponentStory<typeof MessageBox> = () => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <MessageBox
        title="Titulo"
        onInput={setDisp}
        option1="OK"
        option2="Cancel"
        option3="Close"
      >
        Mensagem
      </MessageBox>
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};
