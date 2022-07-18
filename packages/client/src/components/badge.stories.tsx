import type { Story } from "@ladle/react";
import React from "react";
import { Badge } from "./badge";

export default {
  title: "Badge",
  component: Badge,
  argTypes: { dispatch: { action: "dispatch" } },
};

const Template: Story<typeof Badge> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <Badge {...props} dispatch={setDisp} />
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

export const Default: Story<typeof Badge> = Template.bind({});

Default.args = {
  name: "Badge1",
  children: `Badge 1`,
  isClicable: true,
  isClosable: true,
};
