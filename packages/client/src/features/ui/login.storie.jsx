import Login from "./login";
import React from "react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Componentes/Login",
  component: Login,
};

export const Default = () => {
  const [value, setValue] = React.useState({
    user: "",
    password: "",
  });

  return (
    <Login
      onChange={(e) => setValue(e)}
      title={"TESTE"}
      loading={true}
      error={"error"}
    />
  );
};
