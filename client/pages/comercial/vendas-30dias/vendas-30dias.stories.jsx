import { authStore } from '@/client/store/auth_store.mjs'
import Vendas30dias from './vendas-30dias.jsx'

const meta = {
  component: Vendas30dias,
}

export default meta

authStore.state.getState().currentUser.grupoIds = '0'

export const Default = { render: () => <Vendas30dias /> }
