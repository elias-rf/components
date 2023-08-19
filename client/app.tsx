import { TrpcProvider } from "@/rpc/utils/trpc-provider";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/private-route";
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
const Clientes = React.lazy(async () => import("./pages/comercial/clientes"));
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

const Transferencia = React.lazy(
  async () => import("./pages/industrial/transferencia")
);

// outros
const Agenda = React.lazy(async () => import("./pages/outros/agenda"));

// sistema
const Usuario = React.lazy(async () => import("./pages/sistema/usuarios"));
const Permissao = React.lazy(async () => import("./pages/sistema/permissoes"));
const Profile = React.lazy(async () => import("./pages/profile"));

/** Componente com todas a rotas da aplicativo */
export function App() {
  return (
    <TrpcProvider>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />

              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />

              <Route path="comercial">
                <Route
                  path="precos"
                  element={
                    <PrivateRoute>
                      <Precos />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="cliente"
                  element={
                    <PrivateRoute>
                      <Clientes />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="faturamento"
                  element={
                    <PrivateRoute>
                      <Faturamento />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="vendas30dias"
                  element={
                    <PrivateRoute>
                      <Vendas30Dias />
                    </PrivateRoute>
                  }
                />
              </Route>

              <Route path="industrial">
                <Route
                  path="controles"
                  element={
                    <PrivateRoute>
                      <Controles />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="transferencia"
                  element={
                    <PrivateRoute>
                      <Transferencia />
                    </PrivateRoute>
                  }
                />
              </Route>

              <Route path="sistema">
                <Route
                  path="usuario"
                  element={
                    <PrivateRoute>
                      <Usuario />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="permissao"
                  element={
                    <PrivateRoute>
                      <Permissao />
                    </PrivateRoute>
                  }
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
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
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
        </BrowserRouter>
      </Suspense>
    </TrpcProvider>
  );
}
