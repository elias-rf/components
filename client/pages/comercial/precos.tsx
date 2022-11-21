import { Auth } from "../../features/auth";
import { PrecosCliente } from "../../features/precos/precos_cliente";

function Precos() {
  return (
    <Auth>
      <PrecosCliente />
    </Auth>
  );
}

export default Precos;
