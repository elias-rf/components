import { Navbar } from '@/client/features/navbar'
import '@/client/index.css'
import type { Story } from '@ladle/react'

export default {
  title: 'features/navbar',
}

export const Default: Story = () => {
  return (
    <>
      <Navbar />
    </>
  )
}
