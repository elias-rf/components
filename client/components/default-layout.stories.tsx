import shoppingBag from "@iconify/icons-carbon/shopping-bag";
import userAvatar from "@iconify/icons-carbon/user-avatar";
import type { Story } from "@ladle/react";
import React from "react";
import { DefaultLayout } from "./default-layout";

const menu = {
  versao: "1.0.0",
  title: { title: "Visiontech", to: "/" },
  groups: [
    {
      title: "Usuario",
      icon: userAvatar,
      items: [
        { title: "Alterar Senha", to: "/password" },
        { title: "Logout", to: "/logout" },
      ],
    },
    {
      title: "Comercial",
      icon: shoppingBag,
      items: [
        { title: "Calculadora de Preços", to: "/comercial/precos" },
        { title: "Vendas 30 Dias", to: "/comercial/vendas30dias" },
      ],
    },
    {
      title: "Industrial",
      icon: shoppingBag,
      items: [
        { title: "Controles de produção", to: "/industrial/controles" },
        { title: "Transferência", to: "/industrial/transferencia" },
      ],
    },
    {
      title: "Sistema",
      icon: shoppingBag,
      items: [
        { title: "Usuários", to: "/sistema/usuario" },
        { title: "Permissões", to: "/sistema/permissao" },
      ],
    },
    {
      title: "Outros",
      icon: shoppingBag,
      items: [{ title: "Agenda de ramais", to: "/outros/agenda" }],
    },
  ],
};

export default {
  title: "DefaultLayout",
  component: DefaultLayout,
  argTypes: { dispatch: { action: "dispatch" } },
};

const Template: Story<typeof DefaultLayout> = (props: any) => {
  const [disp, setDisp] = React.useState({});
  return (
    <>
      <DefaultLayout {...props} dispatch={setDisp} />
      <div>{JSON.stringify(disp)}</div>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  children: `Página 1`,
  currentUser: { nome: "Teste" },
  isAuthenticated: true,
  menu,
};
