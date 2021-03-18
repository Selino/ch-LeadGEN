import React from "react"
import MiniBar from "./MiniBar"

export default {
  title: "MiniBar",
  component: MiniBar,
  argTypes: {
    Perc: {
      description:
        "A number used to set the fill amount of the bar in increments of 1.",
      table: {
        type: {
          summary: "number",
          detail: "Lorem ipsum dolar",
        },
        defaultValue: { summary: "50" },
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
  parameters: {},
}

export const Primary = (args) => <MiniBar {...args} />
export const Success = (args) => <MiniBar {...args} forGroundColor='green' />
