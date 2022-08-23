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
  const [vlr, setVlr] = React.useState(123456789);
  return (
    <>
      <TextboxNumber
        value={vlr}
        name="textbox1"
        onChange={(v) => {
          setDisp(v.value);
          setVlr(v.value);
        }}
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
