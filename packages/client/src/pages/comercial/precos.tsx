import Authorization from "../../features/ui/authorization";
import PrecosCliente from "../../features/precos/precos-cliente";

function Precos() {
  return (
    <Authorization>
      <PrecosCliente />
    </Authorization>
  );
}

export default Precos;
