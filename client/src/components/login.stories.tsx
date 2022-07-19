import type { Story } from "@ladle/react";
import React from "react";
import { Login } from "./login";

export default {
  title: "Login",
  component: Login,
};

const Template: Story<typeof Login> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <Login {...props} dispatch={setDisp} />
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: "Botão1",
  loading: false,
  error: `Botão1`,
};
