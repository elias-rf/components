import React from "react";

interface ModalProps {
  show: boolean;
  children: React.ReactNode;
}

export function Modal({ show = false, children }: ModalProps) {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="relative w-auto max-w-3xl mx-auto my-6">{children}</div>
      </div>
      <div className={"opacity-25 fixed inset-0 z-40 bg-black"}></div>
    </>
  );
}
