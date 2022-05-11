import Button from "./form/button";
import MessageBox from "./message-box";
import React from "react";

const story = {
  title: "Componentes/MessageBox",
  component: MessageBox,
};

export const PadraoOk = () => {
  const [message, setMessage] = React.useState("");
  return (
    <>
      <Button onClick={() => setMessage("Teste")}>Abrir Modal</Button>
      <Button onClick={() => setMessage("")}>Fechar Modal</Button>
      <MessageBox btn1={"Ok"}>{"Mensagem de Teste"}</MessageBox>
    </>
  );
};

export const PadraoOkCancel = () => {
  const [message, setMessage] = React.useState("");
  return (
    <>
      <Button onClick={() => setMessage("Teste")}>Abrir Modal</Button>
      <Button onClick={() => setMessage("")}>Fechar Modal</Button>
      <MessageBox
        btn1={"Ok"}
        btn2="Cancel"
      >
        {"Mensagem de Teste"}
      </MessageBox>
    </>
  );
};

export default story;
