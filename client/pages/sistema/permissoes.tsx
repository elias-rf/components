import { Box } from "@/client/components/ui";
import { GroupSubject } from "../../features/permissoes/group-subject";

export default function Permissoes() {
  return (
    <Box sx={{ p: 1 }}>
      <GroupSubject />;
    </Box>
  );
}
