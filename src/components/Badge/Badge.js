import React from "react"
import colors from "../../tokens/colors"
import fontSizes from "../../tokens/fontSizes"
import spacing from "../../tokens/spacing"
import fontWeights from "../../tokens/fontWeights"
import radii from "../../tokens/radii"

export default function Badge(props) {
  const { variant } = props
  return (
    <div
      style={{
        color: colors.white,
        padding: spacing.tiny,
        fontSize: fontSizes.badge,
        fontWeight: fontWeights.black,
        backgroundColor: variant,
        textTransform: "uppercase",
        width: "100%",
        textAlign: "center",
        borderRadius: radii.rounded,
      }}
    >
      {props.text}
    </div>
  )
}
