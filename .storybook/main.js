const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  reactOptions: {
    fastRefresh: true,
  },
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "storybook-addon-designs",
  ],
  // Just to get CSS import working in Storybook
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [require("tailwindcss"), require("autoprefixer")],
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    })
    return config
  },
}
