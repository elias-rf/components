import { Auth } from "../../features/auth";
import { PrecosCliente } from "../../features/precos/precos-cliente";

function Precos() {
  return (
    <Auth>
      <PrecosCliente />
    </Auth>
  );
}

export default Precos;
