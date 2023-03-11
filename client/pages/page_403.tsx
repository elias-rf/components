import pg403 from "../assets/images/403.gif";
import { Anchor } from "../components/anchor";

export default function Page403() {
  return (
    <div className={"flex items-center justify-center w-full h-full"}>
      <div className={"text-3xl text-center"}>
        Você não possui permissão!{" "}
        <Anchor
          className={"text-blue-500"}
          href="/"
        >
          Voltar ao início
        </Anchor>
        <div>
          <img
            src={pg403}
            width={720}
            height={360}
            alt={"Página não encontrada"}
          />
        </div>
      </div>
    </div>
  );
}
