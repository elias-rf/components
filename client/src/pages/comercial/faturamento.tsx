import Authorization from "../../features/ui/authorization";
import Faturamento from "../../features/faturamento/faturamento";

function FaturamentoPage() {
  return (
    <Authorization>
      <Faturamento />
    </Authorization>
  );
}

export default FaturamentoPage;
