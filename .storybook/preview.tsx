import type { Preview } from "@storybook/react";
import "uno.css";
import '../client/index.css';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { TrpcProvider } from "../rpc/utils/trpc-provider";

const theme = createTheme({});

const preview: Preview = {
    decorators: [
    (Story) => (
      <TrpcProvider>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </TrpcProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
