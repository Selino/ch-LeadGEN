const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.@(js|mdx)"],
  reactOptions: {
    fastRefresh: true,
  },
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    // "@storybook/addon-docs",
    // "@storybook/addon-controls",
    "storybook-addon-designs",
  ],
  // Just to get CSS import working in Storybook
  webpackFinal: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          // Filter out the default .css rule.
          ...config.module.rules.filter((rule) => /\.css$/ !== rule.test),
          // Add our own css rule which in turn will read the postcss.config.js from project root.
          {
            test: /\.css1$/,
            exclude: [/\.module\.css$/, /@storybook/],
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: { importLoaders: 1, sourceMap: false },
              },
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  sourceMap: false,
                },
              },
            ],
          },
        ],
      },
    }
  },
}
