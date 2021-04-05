import React from "react"
import MiniBar from "./MiniBar"

export default {
  title: "Components/Metrics/MiniBar",
  component: MiniBar,
  argTypes: {
    Perc: {
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
    Perc: 50,
    backGroundColor: "#E5E5E5",
    forGroundColor: "#428BCA",
  },
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/xGF6TXDWOoigzGthqp9i70/LG-UIKit-v3?node-id=395%3A6",
    },
  },
}

export const Primary = (args) => <MiniBar {...args} />
export const Success = (args) => <MiniBar {...args} forGroundColor='green' />
