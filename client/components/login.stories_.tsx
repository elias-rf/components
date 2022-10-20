import type { Story } from "@ladle/react";
import React from "react";
import { Login } from "./login";

export default {
  title: "Login",
  component: Login,
};

export const Default: Story<typeof Login> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <Login
        title={"Login Teste"}
        loading={false}
        error={"Erro de teste"}
        onInput={(e) =>
          setDisp({ name: e.name, value: e.value, event: e.eventName })
        }
      />
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};
