import { PrecosCliente } from '@/client/features/comercial/precos/precos-cliente.js'
import { precosStore } from '@/client/features/comercial/precos/precos_store.js'
import { authStore } from '@/client/store/auth_store.js'
import { Story } from '@ladle/react'

export default {
  title: 'features/precos/precos-cliente',
}

export const Default: Story = () => <PrecosCliente auth={authStore} />
