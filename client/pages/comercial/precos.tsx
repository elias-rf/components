import { Auth } from "../../features/auth";
import { PrecosCliente } from "../../features/precos/precos_cliente";

export default function Precos() {
  return (
    <Auth>
      <PrecosCliente />
    </Auth>
  );
}
