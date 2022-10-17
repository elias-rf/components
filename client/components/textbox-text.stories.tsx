import type { Story } from "@ladle/react";
import React from "react";
import { TextboxText } from "./textbox-text";

export default {
  title: "TextboxText",
  component: TextboxText,
  argTypes: { dispatch: { action: "dispatch" } },
};

export const Default: Story<typeof TextboxText> = (props: any) => {
  const [v1, setV1] = React.useState("");
  const [v2, setV2] = React.useState("");

  const [disp, setDisp] = React.useState({});
  return (
    <form>
      <TextboxText
        value={v1}
        name={"text1"}
        onBlur={(e) =>
          setDisp({ name: e.name, value: e.value, event: e.eventName })
        }
        onChange={(e) => {
          setDisp({ name: e.name, value: e.value, event: e.eventName });
          setV1(e.value);
        }}
        dispatch={setDisp}
      />
      <TextboxText
        value={v2}
        name={"text2"}
        onBlur={(e) => {
          setDisp({ name: e.name, value: e.value, event: e.eventName });
        }}
        onChange={(e) => {
          setDisp({ name: e.name, value: e.value, event: e.eventName });
          setV2(e.value);
        }}
        dispatch={setDisp}
      />
      <div>{JSON.stringify(disp)}</div>
    </form>
  );
};
