import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { EsterilizacaoInternaMensal } from "./est_int_mensal";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: EsterilizacaoInternaMensal,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof EsterilizacaoInternaMensal>;

export const Est_Int_Mensal: ComponentStory<typeof EsterilizacaoInternaMensal> =
  () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loading...</div>}>
          <EsterilizacaoInternaMensal
            mesInicial={{ mes: "2021-01" }}
            mesCorrente={{ mes: "2021-01" }}
            onSelectEvent={(event) => console.log(event)}
          />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
