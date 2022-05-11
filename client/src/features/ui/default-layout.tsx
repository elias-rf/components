import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import userAvatar from "@iconify/icons-carbon/user-avatar";
import shoppingBag from "@iconify/icons-carbon/shopping-bag";
import settings from "@iconify/icons-carbon/settings";
import cicsExplorer from "@iconify/icons-carbon/cics-explorer";
import manufacturer from "@iconify/icons-fluent/manufacturer-24-regular";

import Menu, { MenuBody, MenuGroup, MenuItem, MenuTitle } from "./menu";
import useUserStore from "../../state/user-store";

export default function DefaultLayout() {
  const signOut = useUserStore((state) => state.signOut);
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  const currentUser = useUserStore((state) => state.currentUser);
  const navigate = useNavigate();
  async function logoutHandle() {
    await signOut();
    navigate("/login");
  }

  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="print:hidden">
        <div className="flex-initial">
          <Menu>
            <MenuTitle href={"/"}>Visiontech</MenuTitle>
            {isAuthenticated() ? (
              <MenuBody>
                <MenuGroup
                  icon={userAvatar}
                  title={currentUser.nome || currentUser.NomeUsuario}
                >
                  <MenuItem href={"/password"}>Alterar Senha</MenuItem>
                  <MenuItem onClick={logoutHandle}>Logout</MenuItem>
                </MenuGroup>
                <MenuGroup
                  icon={shoppingBag}
                  title={"Comercial"}
                >
                  <MenuItem href={"/comercial/precos"}>
                    Calculadora de preços
                  </MenuItem>
                  <MenuItem href={"/comercial/cliente"}>Clientes</MenuItem>
                  <MenuItem href={"/comercial/faturamento"}>
                    Faturamento
                  </MenuItem>
                  <MenuItem href={"/comercial/vendas30dias"}>
                    Vendas 30 Dias
                  </MenuItem>
                </MenuGroup>
                <MenuGroup
                  icon={manufacturer}
                  title={"Industrial"}
                >
                  <MenuItem href={"/industrial/controles"}>
                    Controles de produção
                  </MenuItem>
                  <MenuItem href={"/industrial/ordemProducao"}>
                    Ordens de produção
                  </MenuItem>
                  <MenuItem href={"/industrial/emProcesso"}>
                    Ordens em processo
                  </MenuItem>
                  <MenuItem href={"/industrial/transferencia"}>
                    Transferência
                  </MenuItem>
                </MenuGroup>
                <MenuGroup
                  icon={settings}
                  title={"Sistema"}
                >
                  <MenuItem href={"/sistema/usuario"}>Usuários</MenuItem>
                  <MenuItem href={"/sistema/permissao"}>Permissões</MenuItem>
                </MenuGroup>
                <MenuGroup
                  icon={cicsExplorer}
                  title={"Outros"}
                >
                  <MenuItem href={"/outros/agenda"}>Agenda de ramais</MenuItem>
                </MenuGroup>
              </MenuBody>
            ) : (
              <MenuBody>
                <div className="pl-2">
                  <MenuItem href={"/login"}>Login</MenuItem>
                </div>
              </MenuBody>
            )}
          </Menu>
        </div>
      </div>
      <main className="flex-auto overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
