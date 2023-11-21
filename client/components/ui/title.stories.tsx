import { Title } from '@/client/components/ui/title.js'
import '@/client/index.css'
import type { Story } from '@ladle/react'

export const Default: Story = () => {
  return (
    <>
      <Title>Título</Title>
    </>
  )
}

export default {
  title: 'Components / UI / Title',
}
