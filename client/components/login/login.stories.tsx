import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Login } from "./login";

export default {
  title: "Components/Login",
  component: Login,
  argTypes: { onInput: { action: "onInput" } },
} as ComponentMeta<typeof Login>;

export const Default: ComponentStory<typeof Login> = (props) => {
  console.log(`🚀 ~ file: login.stories.tsx ~ line 11 ~ props`, props);
  return (
    <>
      <Login {...props} />
    </>
  );
};

Default.args = {
  title: "Login Teste",
  error: "Erro de teste",
};
