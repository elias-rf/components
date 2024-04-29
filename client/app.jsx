import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { Suspense } from 'react'
import { Route, Switch, useLocation } from 'wouter'
import { Layout } from './features/layout.jsx'
import { Home } from './pages/home.jsx'
import { Loading } from './pages/loading.jsx'
import { Login } from './pages/login.jsx'
import { Logout } from './pages/logout.jsx'
import { authStore } from './store/auth_store.mjs'

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5000 } },
})

// utilidades
// const Page403 = React.lazy(async () => import('./pages/page_403'))
const Page404 = React.lazy(async () => import('./pages/page_404.jsx'))

// comercial
const Clientes = React.lazy(
  async () => import('./pages/comercial/cliente/cliente.jsx')
)
// const Faturamento = React.lazy(
//   async () => import('./pages/comercial/faturamento')
// )
const Precos = React.lazy(
  async () => import('./pages/comercial/precos/precos.jsx')
)
const Vendas30Dias = React.lazy(
  async () => import('./pages/comercial/vendas-30dias/vendas-30dias.jsx')
)

// industrial
const Controles = React.lazy(
  async () => import('./pages/industrial/controles/controles.jsx')
)
const LotesSaida = React.lazy(
  async () => import('./pages/industrial/lotes-saida/lotes-saida.jsx')
)

const Transferencia = React.lazy(
  async () => import('./pages/industrial/transferencia/transferencia.jsx')
)

// outros
const Agenda = React.lazy(
  async () => import('./pages/outros/agenda/agenda.jsx')
)
const Dashboard = React.lazy(
  async () => import('./pages/outros/dashboard/dashboard.jsx')
)
const FileManager = React.lazy(
  async () => import('./pages/outros/file-manager/file-manager.jsx')
)

// sistema
const Usuario = React.lazy(
  async () => import('./pages/sistema/usuarios/usuarios.jsx')
)
const Permissao = React.lazy(
  async () => import('./pages/sistema/permissoes/grupo-sujeito.jsx')
)
const Grupos = React.lazy(
  async () => import('./pages/sistema/grupos/grupos.jsx')
)

/** Componente com todas a rotas da aplicativo */
export function App() {
  const [location, setLocation] = useLocation()

  React.useEffect(() => {
    if (!authStore.isAuthenticated() && location !== '/login') {
      setLocation('/login')
    }
  }, [location, setLocation, authStore.isAuthenticated])

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools buttonPosition="bottom-left" />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/comercial/precos">
              <Precos />
            </Route>
            <Route path="/comercial/vendas30dias">
              <Vendas30Dias />
            </Route>
            <Route path="/comercial/cliente">
              <Clientes />
            </Route>
            <Route path="/industrial/controles">
              <Controles />
            </Route>
            <Route path="/industrial/lotesSaida">
              <LotesSaida />
            </Route>
            <Route path="/industrial/transferencia">
              <Transferencia />
            </Route>
            <Route path="/sistema/usuario">
              <Usuario />
            </Route>
            <Route path="/sistema/permissao">
              <Permissao />
            </Route>
            <Route path="/sistema/grupos">
              <Grupos />
            </Route>
            <Route path="/outros/agenda">
              <Agenda />
            </Route>
            <Route path="/outros/fileManager">
              <FileManager />
            </Route>
            <Route path="/outros/dashboard">
              <Dashboard />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </Suspense>
      </QueryClientProvider>
    </Layout>
  )
}
