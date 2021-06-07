import React from "react"
import PropTypes from "prop-types"
import colors from "../../tokens/colors"
import radii from "../../tokens/radii"

/**
- Use the MiniBar when presented metrics are missing scope.
- Combine with tooltips to allow more detailed information.
**/

export default function MiniBar(props) {
  const {
    backGroundColor = colors.graysGray2,
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
    width: props.perc + "%",
    height: "100%",
  }

  return (
    <div style={myBarBackGround}>
      <div style={myBarForGround}></div>
    </div>
  )
}

MiniBar.propTypes = {
  perc: PropTypes.number,
  backGroundColor: PropTypes.string,
  forGroundColor: PropTypes.string,
}
