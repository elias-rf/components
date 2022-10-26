import React from "react";
import { IEvent } from "../../types";

import { Button } from "./button";
import { Modal } from "./modal";

interface IMessageBoxProps {
  children: React.ReactNode;
  title: string;
  option1: string;
  option2: string;
  option3: string;
  onInput: (event: IEvent) => void;
}

export function MessageBox(props: IMessageBoxProps) {
  const { children, title, option1, option2, option3, onInput } = props;

  function handleClick(e: IEvent) {
    onInput({
      name: title,
      value: e.name,
      component: "MessageBox",
      event: "input",
    });
  }

  return (
    <>
      <Modal show={children !== ""}>
        {/*content*/}
        <div className="flex flex-col w-full bg-white rounded-lg shadow-lg outline-none border-1 focus:outline-none">
          {/*header*/}
          {title ? (
            <div className="flex items-start justify-between p-2">
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          ) : null}
          {/*body*/}
          <div className="flex-auto p-2">{children}</div>
          {/*footer*/}
          <div className="flex items-center justify-end p-2 space-x-2">
            {option1 ? (
              <Button onClick={handleClick} name="option1">
                {option1}
              </Button>
            ) : null}
            {option2 ? (
              <Button onClick={handleClick} name="option2">
                {option2}
              </Button>
            ) : null}
            {option3 ? (
              <Button onClick={handleClick} name="option3">
                {option3}
              </Button>
            ) : null}
          </div>
        </div>
      </Modal>
    </>
  );
}
