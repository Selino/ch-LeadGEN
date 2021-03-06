import { addParameters } from "@storybook/react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../src/index.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "Start Here",
        "Brand Guidelines",
        ["Logos", "Colors", "Typography", "Imagery", "Voice & Tone"],
        "Platform",
        ["Overview", "Tokens", "Icons"],
      ],
    },
  },
}

const cssReq = require.context("!!raw-loader!../src", true, /.\.css$/)
const cssTokenFiles = cssReq
  .keys()
  .map((filename) => ({ filename, content: cssReq(filename).default }))

const scssReq = require.context("!!raw-loader!../src", true, /.\.scss$/)
const scssTokenFiles = scssReq
  .keys()
  .map((filename) => ({ filename, content: scssReq(filename).default }))

const lessReq = require.context("!!raw-loader!../src", true, /.\.less$/)
const lessTokenFiles = lessReq
  .keys()
  .map((filename) => ({ filename, content: lessReq(filename).default }))

// const svgIconsReq = require.context("!!raw-loader!../src", true, /.\.svg$/)
// const svgIconTokenFiles = svgIconsReq
//   .keys()
//   .map((filename) => ({ filename, content: svgIconsReq(filename).default }))
