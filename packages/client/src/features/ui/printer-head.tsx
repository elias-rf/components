import t from "prop-types";
import React from "react";

interface PrinterHeadProps {
  report: string;
  filter: string;
  user: string;
  date: string;
}

export default function PrinterHead({
  report,
  filter,
  user,
  date,
}: PrinterHeadProps) {
  return (
    <>
      <div className="print:hidden">Visualize a impressão</div>
      <div className="hidden print:block">
        <div className="text-2xl text-center">{report}</div>
        <div className="text-right">
          <div className="">Usuário: {user}</div>
          <div>Data: {date}</div>
        </div>
        <div>Parâmetros: {filter}</div>
      </div>
    </>
  );
}
