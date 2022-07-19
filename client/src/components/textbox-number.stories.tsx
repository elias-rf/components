import type { Story } from "@ladle/react";
import React from "react";
import { TextboxNumber } from "./textbox-number";

export default {
  title: "TextboxNumber",
  component: TextboxNumber,
  argTypes: { dispatch: { action: "dispatch" } },
};

const Template: Story<typeof TextboxNumber> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <TextboxNumber
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
  value: "1",
  field: "textbox1",
  disabled: false,
};
