import React from "react";

import Button from "@mui/material/Button";
import { Modal } from "./modal";

interface IMessageBoxProps {
  children: React.ReactNode;
  title: string;
  option1: string;
  option2: string;
  option3: string;
  onInputEvent: (event: any) => void;
}

export function MessageBox(props: IMessageBoxProps) {
  const { children, title, option1, option2, option3, onInputEvent } = props;

  function handleClick(e: React.MouseEvent) {
    onInputEvent(e);
  }

  return (
    <>
      <Modal show={children !== ""}>
        {/*content*/}
        <div className="border-1 flex w-full flex-col rounded-lg bg-white shadow-lg outline-none focus:outline-none">
          {/*header*/}
          {title ? (
            <div className="flex items-start justify-between p-2">
              <h3 className="text-xl font-semibold">{title}</h3>
            </div>
          ) : null}
          {/*body*/}
          <div className="flex-auto p-2">{children}</div>
          {/*footer*/}
          <div className="flex items-center justify-end space-x-2 p-2">
            {option1 ? (
              <Button
                onClick={handleClick}
                name="option1"
              >
                {option1}
              </Button>
            ) : null}
            {option2 ? (
              <Button
                onClick={handleClick}
                name="option2"
              >
                {option2}
              </Button>
            ) : null}
            {option3 ? (
              <Button
                onClick={handleClick}
                name="option3"
              >
                {option3}
              </Button>
            ) : null}
          </div>
        </div>
      </Modal>
    </>
  );
}
