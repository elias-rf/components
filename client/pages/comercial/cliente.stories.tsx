import { ComponentMeta, ComponentStory } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import Cliente from "./cliente";

const queryClient = new QueryClient();

export default {
  title: "Pages/Cliente",
  component: Cliente,
  parameters: {
    docs: {
      source: {
        code: "Desabilitado por usar Suspense",
      },
    },
  },
} as ComponentMeta<typeof Cliente>;

export const Default: ComponentStory<typeof Cliente> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>loading...</div>}>
        <Cliente />
      </Suspense>{" "}
    </QueryClientProvider>
  );
};
