import { authStore } from '@/client/store/auth_store.mjs'

import Controles from './controles.jsx'

const meta = {
  component: Controles,
}

authStore.state.getState().currentUser.grupoIds = '0'

export default meta

export const Default = { render: () => <Controles /> }
