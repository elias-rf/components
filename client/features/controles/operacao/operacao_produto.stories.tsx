import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { TEvent } from "../../../../types";
import { OperacaoProduto } from "./operacao_produto";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: OperacaoProduto,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof OperacaoProduto>;

export const Operacao_Produto: ComponentStory<typeof OperacaoProduto> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <OperacaoProduto
          operacao={{ operacao: "1010" }}
          dia={{ dia: "2021-01-08" }}
          produtoCorrente={{ produto: "Liteflex" }}
          onSelectEvent={(event: TEvent) => console.log(event)}
        />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
