import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { TransferenciaModelo } from "./transferencia_modelo";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: TransferenciaModelo,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof TransferenciaModelo>;

export const Transferencia_Modelo: ComponentStory<typeof TransferenciaModelo> =
  () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loading...</div>}>
          <TransferenciaModelo diaCorrente={{ dia: "2021-01-04" }} />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
