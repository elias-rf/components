import { Vendas30dias as Vendas } from '@/client/features/vendas/vendas_30dias'
import { Box } from '@mui/material'

/**
 * Componente para manipular Agenda de Ramais
 * @returns {*} componente react
 */
export default function Vendas30dias() {
  return (
    <Box sx={{ p: 1 }}>
      <Vendas />
    </Box>
  )
}
