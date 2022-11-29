import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { EsterilizacaoExternaMensal } from "./est_ext_mensal";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: EsterilizacaoExternaMensal,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof EsterilizacaoExternaMensal>;

export const Est_Ext_Mensal: ComponentStory<typeof EsterilizacaoExternaMensal> =
  () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loading...</div>}>
          <EsterilizacaoExternaMensal
            mesInicial={{ mes: "2021-01" }}
            mesCorrente={{ mes: "2021-01" }}
            onSelectEvent={(event) => console.log(event)}
          />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
