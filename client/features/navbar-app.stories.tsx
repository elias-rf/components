import { NavbarApp } from '@/client/features/navbar-app.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'

export default {
  title: 'features/navbar',
}

export const Default: Story = () => {
  return (
    <>
      <NavbarApp />
    </>
  )
}
