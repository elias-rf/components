import { Box } from "@/client/components/ui";
import { AgendaTelefone } from "../../features/agenda-telefone/agenda-telefone";

/**
 * Agenda de Ramais
 */
export default function Agenda() {
  return (
    <Box sx={{ p: 1 }}>
      <AgendaTelefone />
    </Box>
  );
}
