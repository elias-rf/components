import "@storybook/addon-console";
import { Preview } from "@storybook/react";
// import "../client/index.css";
// import "virtual:uno.css";
import "uno.css";
import { TrpcProvider } from "../utils/trpc/trpc-provider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  darkMode: true,
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <TrpcProvider>
        <Story />
      </TrpcProvider>
    ),
  ],
};

export default preview;
