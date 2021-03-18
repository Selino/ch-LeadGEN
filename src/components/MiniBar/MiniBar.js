import React from "react"
import colors from "../../tokens/colors"
import radii from "../../tokens/radii"

export default function MiniBar(props) {
  const {
    backGroundColor = colors.graysGray4,
    forGroundColor = colors.primaryInactive,
  } = props

  const myBarBackGround = {
    backgroundColor: backGroundColor,
    width: "60px",
    height: "16px",
    borderRadius: radii.rounded,
    overflow: "hidden",
    display: "inline-block",
    marginLeft: ".5rem",
    verticalAlign: "text-bottom",
  }

  const myBarForGround = {
    backgroundColor: forGroundColor,
    width: props.Perc + "%",
    height: "100%",
  }

  return (
    <div style={myBarBackGround}>
      <div style={myBarForGround}></div>
    </div>
  )
}
