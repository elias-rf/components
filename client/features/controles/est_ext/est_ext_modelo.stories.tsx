import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { TEvent } from "../../../../types";
import { EsterilizacaoExternaModelo } from "./est_ext_modelo";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: EsterilizacaoExternaModelo,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof EsterilizacaoExternaModelo>;

export const Est_Ext_Modelo: ComponentStory<typeof EsterilizacaoExternaModelo> =
  () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loading...</div>}>
          <EsterilizacaoExternaModelo
            diaCorrente={{ dia: "2021-01-04" }}
            produtoCorrente={{ produto: "Metil" }}
            onSelectEvent={(event: TEvent) => console.log(event)}
          />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
