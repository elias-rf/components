import type { Story } from "@ladle/react";
import React from "react";
import { Badge } from "./badge";

export default {
  title: "Badge",
  component: Badge,
  argTypes: { dispatch: { action: "dispatch" } },
};

export const Default: Story<typeof Badge> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <Badge
        {...props}
        onClick={(e) => setDisp([e.name, e.eventName, e.value, e.targetName])}
        onClose={(e) => setDisp([e.name, e.eventName, e.value, e.targetName])}
      />
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

Default.args = {
  name: "Badge1",
  children: `Badge_1`,
  isClicable: true,
  isClosable: true,
};
