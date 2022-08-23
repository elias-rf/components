import type { Story } from "@ladle/react";
import React from "react";
import { Textbox } from "./textbox";

export default {
  title: "Textbox",
  component: Textbox,
  argTypes: { dispatch: { action: "dispatch" } },
};

export const Default: Story<typeof Textbox> = (props: any) => {
  const [v1, setV1] = React.useState("");
  const [v2, setV2] = React.useState("");

  const [disp, setDisp] = React.useState({});
  return (
    <form>
      <Textbox
        value={v1}
        name={"text1"}
        onBlur={(e) =>
          setDisp({ name: e.name, value: e.value, event: e.eventName })
        }
        onChange={(e) => {
          setDisp({ name: e.name, value: e.value, event: e.eventName });
          setV1(e.value);
        }}
      />
      <Textbox
        value={v2}
        name={"text2"}
        onBlur={(e) => {
          setDisp({ name: e.name, value: e.value, event: e.eventName });
        }}
        onChange={(e) => {
          setDisp({ name: e.name, value: e.value, event: e.eventName });
          setV2(e.value);
        }}
        onInput={(e) =>
          setDisp({ name: e.name, value: e.value, event: e.eventName })
        }
      />
      <div>{JSON.stringify(disp)}</div>
    </form>
  );
};
