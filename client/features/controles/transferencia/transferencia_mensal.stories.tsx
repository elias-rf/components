import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { TransferenciaMensal } from "./transferencia_mensal";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: TransferenciaMensal,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof TransferenciaMensal>;

export const Transferencia_Mensal: ComponentStory<typeof TransferenciaMensal> =
  () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loading...</div>}>
          <TransferenciaMensal mesCorrente={{ mes: "2021-01" }} />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
