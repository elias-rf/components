import { Box } from "@mui/material";
import { Vendas30dias as Vendas } from "../../features/vendas/vendas_30dias";

/**
 * Componente para manipular Agenda de Ramais
 * @returns {*} componente react
 */
export default function Vendas30dias() {
  return (
    <Box sx={{ p: 1 }}>
      <Vendas />
    </Box>
  );
}
