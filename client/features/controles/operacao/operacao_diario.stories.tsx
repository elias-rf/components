import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { OperacaoDiario } from "./operacao_diario";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: OperacaoDiario,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof OperacaoDiario>;

export const Operacao_Diario: ComponentStory<typeof OperacaoDiario> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <OperacaoDiario
          operacao={{ operacao: "1010" }}
          mes={{ mes: "2021-01" }}
          diaCorrente={{ dia: "2021-01-02" }}
        />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
