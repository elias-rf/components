import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { TEvent } from "../../../../types";
import { EsterilizacaoInternaProduto } from "./est_int_produto";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: EsterilizacaoInternaProduto,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof EsterilizacaoInternaProduto>;

export const Est_Int_Produto: ComponentStory<
  typeof EsterilizacaoInternaProduto
> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <EsterilizacaoInternaProduto
          diaCorrente={{ dia: "2021-01-08" }}
          produtoCorrente={{ produto: "Liteflex" }}
          onSelectEvent={(event: TEvent) => console.log(event)}
        />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
