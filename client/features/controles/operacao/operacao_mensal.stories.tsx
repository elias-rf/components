import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { OperacaoMensal } from "./operacao_mensal";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: OperacaoMensal,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof OperacaoMensal>;

export const Operacao_Mensal: ComponentStory<typeof OperacaoMensal> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <OperacaoMensal
          operacao={{ operacao: "1010" }}
          mesInicial={{ mes: "2021-01" }}
          mesCorrente={{ mes: "2021-01" }}
        />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
