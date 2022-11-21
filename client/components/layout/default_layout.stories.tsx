import shoppingBag from "@iconify/icons-carbon/shopping-bag";
import userAvatar from "@iconify/icons-carbon/user-avatar";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DefaultLayout } from "./default_layout";

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
  title: "Components/DefaultLayout",
  component: DefaultLayout,
  argTypes: { onClick: { action: "onClick" } },
} as ComponentMeta<typeof DefaultLayout>;

export const Default: ComponentStory<typeof DefaultLayout> = (props: any) => {
  return (
    <>
      <DefaultLayout {...props}>Página de dados</DefaultLayout>
    </>
  );
};

Default.args = {
  children: `Página 1`,
  isAuthenticated: true,
  menu,
};

Default.storyName = "DefaultLayout";
