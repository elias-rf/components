import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { TEvent } from "../../../../types";
import { OperacaoModelo } from "./operacao_modelo";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: OperacaoModelo,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof OperacaoModelo>;

export const Operacao_Modelo: ComponentStory<typeof OperacaoModelo> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <OperacaoModelo
          operacao={{ operacao: "1010" }}
          dia={{ dia: "2021-01-08" }}
          produto={{ produto: "Liteflex" }}
          onSelectEvent={(event: TEvent) => console.log(event)}
        />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
