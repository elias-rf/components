import Button from "./form/button";
import Modal from "./modal";
import React from "react";

const story = {
  title: "Componentes/Modal",
  component: Modal,
};

export const Padrao = () => {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Abrir Modal</Button>
      <Button onClick={() => setShowModal(false)}>Fechar Modal</Button>
      <Modal show={showModal}>
        {/*content*/}
        <div className="flex flex-col w-full bg-white rounded-lg shadow-lg outline-none border-1 focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-2">
            <h3 className="text-xl font-semibold">Modal Title</h3>
          </div>
          {/*body*/}
          <div className="flex-auto p-2">
            <p>
              Mensagem de teste com texto bem maior que normalmente
              <br /> usaria para uma mensagem.
            </p>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-2">
            <Button onClick={() => setShowModal(false)}>Fechar</Button>
            <Button onClick={() => setShowModal(false)}>Salvar</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default story;
