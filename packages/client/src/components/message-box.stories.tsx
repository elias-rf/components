import type { Story } from "@ladle/react";
import React from "react";
import { MessageBox } from "./message-box";

export default {
  title: "MessageBox",
  component: MessageBox,
  argTypes: { dispatch: { action: "dispatch" } },
};

const Template: Story<typeof MessageBox> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <MessageBox {...props} dispatch={setDisp} />
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: "Título",
  children: `Mensagem`,
  btn1: "OK",
  btn2: "Cancel",
  btn3: "Close",
};
