import { PrecosCliente } from '@/client/pages/comercial/precos/precos-cliente.js'
import { precosStore } from '@/client/pages/comercial/precos/precos_store.js'
import { authStore } from '@/client/store/auth_store.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/precos/precos-cliente',
}

export const Default: Story = () => <PrecosCliente auth={authStore} />
