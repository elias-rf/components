module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../client/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../client/features/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  staticDirs: ["../public"],
  async viteFinal(config) {
    // console.log(`🚀 ~ file: main.js ~ line 20 ~ viteFinal ~ config`, config);
    return config;
  },
};
