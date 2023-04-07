import { MantineProvider } from "@mantine/core";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TrpcProvider } from "../utils/trpc/trpc-provider";
import { Layout } from "./features/layout";
import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home";
import { Loading } from "./pages/loading";
import { Login } from "./pages/login";
import { Logout } from "./pages/logout";

// utilidades
const Page403 = React.lazy(async () => import("./pages/page_403"));
const Page404 = React.lazy(async () => import("./pages/page_404"));

// comercial
const Cliente = React.lazy(async () => import("./pages/comercial/cliente"));
const Faturamento = React.lazy(
  async () => import("./pages/comercial/faturamento")
);
const Precos = React.lazy(async () => import("./pages/comercial/precos"));
const Vendas30Dias = React.lazy(
  async () => import("./pages/comercial/vendas_30dias")
);

// industrial
const Controles = React.lazy(
  async () => import("./pages/industrial/controles")
);
const OrdemProducao = React.lazy(
  async () => import("./pages/industrial/ordem_producao")
);

const Transferencia = React.lazy(
  async () => import("./pages/industrial/transferencia")
);

// outros
const Agenda = React.lazy(async () => import("./pages/outros/agenda"));

// sistema
const Usuario = React.lazy(async () => import("./pages/sistema/usuarios"));
const Permissao = React.lazy(async () => import("./pages/sistema/permissoes"));

/** Componente com todas a rotas da aplicativo */
export function App() {
  return (
    <TrpcProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
      >
        <BrowserRouter>
          <Suspense
            fallback={
              <Layout>
                <Loading />
              </Layout>
            }
          >
            <Routes>
              <Route element={<Layout />}>
                <Route
                  path="/"
                  element={<Home />}
                />

                <Route
                  path="/dashboard"
                  element={<Dashboard />}
                />

                <Route path="comercial">
                  <Route
                    path="precos"
                    element={<Precos />}
                  />
                  <Route
                    path="cliente"
                    element={<Cliente />}
                  />
                  <Route
                    path="faturamento"
                    element={<Faturamento />}
                  />
                  <Route
                    path="vendas30dias"
                    element={<Vendas30Dias />}
                  />
                </Route>

                <Route path="industrial">
                  <Route
                    path="controles"
                    element={<Controles />}
                  />
                  <Route
                    path="ordemProducao"
                    element={<OrdemProducao />}
                  />
                  <Route
                    path="transferencia"
                    element={<Transferencia />}
                  />
                </Route>

                <Route path="sistema">
                  <Route
                    path="usuario"
                    element={<Usuario />}
                  />
                  <Route
                    path="permissao"
                    element={<Permissao />}
                  />
                </Route>

                <Route path="outros">
                  <Route
                    path="agenda"
                    element={<Agenda />}
                  >
                    <Route
                      path=":currentId"
                      element={<Agenda />}
                    />
                  </Route>
                </Route>
              </Route>

              <Route
                path="/login"
                element={<Login />}
              />

              <Route
                path="/logout"
                element={<Logout />}
              />
              <Route
                path="/403"
                element={<Page403 />}
              />
              <Route
                path="*"
                element={<Page404 />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MantineProvider>
    </TrpcProvider>
  );
}
