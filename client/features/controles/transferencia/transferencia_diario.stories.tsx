import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { TransferenciaDiario } from "./transferencia_diario";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: TransferenciaDiario,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof TransferenciaDiario>;

export const Transferencia_Diario: ComponentStory<typeof TransferenciaDiario> =
  () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loading...</div>}>
          <TransferenciaDiario
            mesCorrente={{ mes: "2021-01" }}
            diaCorrente={{ dia: "2021-01-08" }}
          />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
