module.exports = {
  stories: [
    // "../stories/**/*.stories.mdx",
    // "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../client",
    // "../client/components/**/*.stories.@(js|jsx|ts|tsx)",
    // "../client/features/**/*.stories.@(js|jsx|ts|tsx)",
    // "../client/pages/**/*.stories.@(js|jsx|ts|tsx)",
    // "../client/lib/hooks/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-tailwind-dark-mode",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      fastRefresh: true,
      strictMode: true,
    },
  },
  features: {
    storyStoreV7: true,
  },
  staticDirs: ["../public"],
  async viteFinal(config) {
    config.server.proxy = {
      "/api": "http://localhost:3333",
    };
    return config;
  },
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  docs: {
    autodocs: false,
  },
};
