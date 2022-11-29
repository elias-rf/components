import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { TEvent } from "../../../../types";
import { EsterilizacaoInternaDiario } from "./est_int_diario";

const queryClient = new QueryClient();

export default {
  title: "features/controles",
  component: EsterilizacaoInternaDiario,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof EsterilizacaoInternaDiario>;

export const Est_Int_Diario: ComponentStory<typeof EsterilizacaoInternaDiario> =
  () => {
    return (
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>loading...</div>}>
          <EsterilizacaoInternaDiario
            mesCorrente={{ mes: "2021-01" }}
            diaCorrente={{ dia: "2021-01-02" }}
            onSelectEvent={(event: TEvent) => console.log(event)}
          />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    );
  };
