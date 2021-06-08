import DonutChart from "./DonutChart"

export default {
  title: "Components/Metrics/DonutChart",
  component: DonutChart,
  argTypes: {
    smallNumber: {
      description:
        "A number used to set the fill amount of the bar in increments of 1.",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: "15", detail: "Accepts integers." },
      },
      control: "number",
    },
    totalNumber: {
      description:
        "A number used to set the background fill of the chart compared to the [smallNumber].",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: "100", detail: "Accepts integers." },
      },
      control: "number",
    },
  },
  args: {
    smallNumber: 15,
    totalNumber: 100,
  },
  parameters: {
    componentSubtitle:
      "Just like pie charts, doughnut charts help show the relationships of parts to a whole with each ring corresponding to a data series.",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xGF6TXDWOoigzGthqp9i70/CH-UIKit-v3?node-id=503%3A3485",
    },
  },
}

export const Default = (args) => <DonutChart {...args} />
