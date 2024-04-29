import { authStore } from '@/client/store/auth_store.mjs'
import Precos from './precos.jsx'

const meta = {
  component: Precos,
}

authStore.state.getState().currentUser.grupoIds = '0'

export default meta

export const Default = { render: () => <Precos /> }
