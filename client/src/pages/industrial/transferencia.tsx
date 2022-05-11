import React from "react";
import Transferencia from "@/features/transferencia/transferencia";
import PageTitle from "@/features/ui/page-title";
import Page from "@/features/ui/page";

export default function IndustrialTransferencia() {
  return (
    <Page>
      <PageTitle title="Transferência" />
      <Transferencia />
    </Page>
  );
}
