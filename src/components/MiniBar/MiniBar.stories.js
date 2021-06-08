import React from "react"
import MiniBar from "./MiniBar"

export default {
  title: "Components/Metrics/MiniBar",
  component: MiniBar,
  argTypes: {
    perc: {
      description:
        "A number used to set the fill amount of the bar in increments of 1.",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: { summary: "50", detail: "Accepts integers." },
      },
      control: { type: "number" },
    },
    backGroundColor: { control: "color" },
    forGroundColor: { control: "color" },
  },
  args: {
    perc: 50,
    backGroundColor: "#E5E5E5",
    forGroundColor: "#428BCA",
  },
  parameters: {
    componentSubtitle:
      "An inline horizontal bar chart that quickly provides visual context for numerical metrics.",
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xGF6TXDWOoigzGthqp9i70/CH-UIKit-v3?node-id=1156%3A3",
    },
  },
}

export const Default = (args) => <MiniBar {...args} />
