import type { Story } from "@ladle/react";
import React from "react";
import { TextboxText } from "./textbox-text";

export default {
  title: "TextboxText",
  component: TextboxText,
  argTypes: { dispatch: { action: "dispatch" } },
};

const Template: Story<typeof TextboxText> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <TextboxText
        {...props}
        onBlur={(e) => console.log("Blur", e.target.value)}
        onChange={(e) => console.log("Change", e.target.value)}
        dispatch={setDisp}
      />
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  value: "valor",
  field: "textbox1",
  disabled: false,
};
