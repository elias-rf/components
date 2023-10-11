import { Story } from '@ladle/react'
import { BrowserRouter } from 'react-router-dom'
import Precos from './precos'

export default {
  title: 'pages/comercial/precos',
}

export const Default: Story = () => (
  <BrowserRouter>
    <Precos />
  </BrowserRouter>
)
