import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import knexRequest from "./lib/knex/knex-request";
import ClearLayout from "./features/ui/clear-layout";
import DefaultLayout from "./features/ui/default-layout";
import { DataProvider } from "./contexts/data-context";

// utilidades
import Home from "./pages/home";
import Login from "./pages/login";
import Loading from "./pages/loading";

const Page403 = lazy(async () => import("./pages/page-403"));
const Page404 = lazy(async () => import("./pages/page-404"));
// comercial
const Cliente = lazy(async () => import("./pages/comercial/cliente"));
const Faturamento = lazy(async () => import("./pages/comercial/faturamento"));
const Precos = lazy(async () => import("./pages/comercial/precos"));
const Vendas30Dias = lazy(
  async () => import("./pages/comercial/vendas-30dias")
);
// industrial
const Controles = lazy(async () => import("./pages/industrial/controles"));
const OrdemProducao = lazy(
  async () => import("./pages/industrial/ordem-producao")
);
// const EmProcesso = lazy(async () => import("./pages/industrial/em-processo"));
const Transferencia = lazy(
  async () => import("./pages/industrial/transferencia")
);
// outros
const Agenda = lazy(async () => import("./pages/outros/agenda"));
// sistema
const AuthUser = lazy(async () => import("./pages/sistema/auth-user"));
const Auth = lazy(async () => import("./pages/sistema/auth"));
const Sql = lazy(async () => import("./pages/sistema/sql"));

function App() {
  return (
    <DataProvider
      client={knexRequest}
      clientKnex={knexRequest}
    >
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route
                path="/"
                element={<Home />}
              />
              <Route path="comercial">
                <Route
                  path="precos"
                  element={<Precos />}
                />
                <Route
                  path="faturamento"
                  element={<Faturamento />}
                />
                <Route
                  path="cliente"
                  element={<Cliente />}
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
                  element={<AuthUser />}
                ></Route>
                <Route
                  path="permissao"
                  element={<Auth />}
                ></Route>
                <Route
                  path="sql"
                  element={<Sql />}
                ></Route>
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
            <Route element={<ClearLayout />}>
              <Route
                path="/login"
                element={<Login />}
              ></Route>
            </Route>
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
    </DataProvider>
  );
}

export default App;
