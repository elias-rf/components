import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { TEvent } from "../../../../types";
import { EsterilizacaoExternaProduto } from "./est_ext_produto";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: EsterilizacaoExternaProduto,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof EsterilizacaoExternaProduto>;

export const Est_Ext_Produto: ComponentStory<
  typeof EsterilizacaoExternaProduto
> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <EsterilizacaoExternaProduto
          diaCorrente={{ dia: "2021-01-04" }}
          produtoCorrente={{ produto: "Metil" }}
          onSelectEvent={(event: TEvent) => console.log(event)}
        />
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
