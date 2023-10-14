import { Story } from '@ladle/react'
import { Usuario } from './usuario'

export default {
  title: 'features/usuario/usuario',
}

export const Default: Story = () => {
  return (
    <>
      <div className="p-2">
        <Usuario />
      </div>
    </>
  )
}
