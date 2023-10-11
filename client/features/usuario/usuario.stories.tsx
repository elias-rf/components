import { Story } from '@ladle/react'
import { Box } from '@mui/material'
import { Usuario } from './usuario'

export default {
  title: 'features/usuario/usuario',
}

export const Default: Story = () => {
  return (
    <>
      <Box sx={{ border: '1px solid cyan' }}>
        <Usuario />
      </Box>
    </>
  )
}
