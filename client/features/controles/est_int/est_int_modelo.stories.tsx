import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { TEvent } from "../../../../types";
import { EsterilizacaoInternaModelo } from "./est_int_modelo";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: EsterilizacaoInternaModelo,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof EsterilizacaoInternaModelo>;

export const Est_Int_Modelo: ComponentStory<typeof EsterilizacaoInternaModelo> =
  () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loading...</div>}>
          <EsterilizacaoInternaModelo
            diaCorrente={{ dia: "2021-01-08" }}
            produtoCorrente={{ produto: "LiteFlex" }}
            onSelectEvent={(event: TEvent) => console.log(event)}
          />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
