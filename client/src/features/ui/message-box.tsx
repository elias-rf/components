import React from "react";
import { Action } from "../../..";

import Button from "./form/button";
import Modal from "./modal";

interface MessageBoxProps {
  children: React.ReactNode;
  title: string;
  onClick: (name: "btn1" | "btn2" | "btn3") => void;
  btn1: string;
  btn2: string;
  btn3: string;
}

export default function MessageBox({
  children,
  title,
  onClick,
  btn1,
  btn2,
  btn3,
}: MessageBoxProps) {
  function handleClick(action: Action) {
    onClick(action.payload.name);
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
            {btn1 ? (
              <Button
                dispatch={handleClick}
                name="btn1"
              >
                {btn1}
              </Button>
            ) : null}
            {btn2 ? (
              <Button
                dispatch={handleClick}
                name="btn2"
              >
                {btn2}
              </Button>
            ) : null}
            {btn3 ? (
              <Button
                dispatch={handleClick}
                name="btn3"
              >
                {btn3}
              </Button>
            ) : null}
          </div>
        </div>
      </Modal>
    </>
  );
}
