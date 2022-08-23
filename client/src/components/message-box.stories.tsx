import type { Story } from "@ladle/react";
import React from "react";
import { MessageBox } from "./message-box";

export default {
  title: "MessageBox",
  component: MessageBox,
  argTypes: { dispatch: { action: "dispatch" } },
};

export const Default: Story<typeof MessageBox> = (props: any) => {
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
