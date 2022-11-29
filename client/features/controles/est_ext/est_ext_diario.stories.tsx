import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { EsterilizacaoExternaDiario } from "./est_ext_diario";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: EsterilizacaoExternaDiario,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof EsterilizacaoExternaDiario>;

export const Est_Ext_Diario: ComponentStory<typeof EsterilizacaoExternaDiario> =
  () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loading...</div>}>
          <EsterilizacaoExternaDiario
            mesCorrente={{ mes: "2021-01" }}
            diaCorrente={{ dia: "2021-01-02" }}
            onSelectEvent={(event) => console.log(event)}
          />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
