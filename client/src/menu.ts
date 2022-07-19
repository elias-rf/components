import cicsExplorer from "@iconify/icons-carbon/cics-explorer";
import settings from "@iconify/icons-carbon/settings";
import shoppingBag from "@iconify/icons-carbon/shopping-bag";
import userAvatar from "@iconify/icons-carbon/user-avatar";
import manufacturer from "@iconify/icons-fluent/manufacturer-24-regular";

export const menu = {
  versao: "1.0.1",
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
      icon: manufacturer,
      items: [
        { title: "Controles de produção", to: "/industrial/controles" },
        { title: "Transferência", to: "/industrial/transferencia" },
      ],
    },
    {
      title: "Sistema",
      icon: settings,
      items: [
        { title: "Usuários", to: "/sistema/usuario" },
        { title: "Permissões", to: "/sistema/permissao" },
      ],
    },
    {
      title: "Outros",
      icon: cicsExplorer,
      items: [{ title: "Agenda de ramais", to: "/outros/agenda" }],
    },
  ],
};
