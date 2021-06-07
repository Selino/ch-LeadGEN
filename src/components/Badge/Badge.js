import React from "react"
import fontSizes from "../../tokens/fontSizes"
import spacing from "../../tokens/spacing"
import fontWeights from "../../tokens/fontWeights"
import radii from "../../tokens/radii"

export default function Badge(props) {
  const { status, text, bg } = props
  return (
    <div
      style={{
        color: text,
        padding: spacing.micro,
        fontSize: fontSizes.badge,
        fontWeight: fontWeights.black,
        backgroundColor: bg,
        textTransform: "uppercase",
        width: "100%",
        textAlign: "center",
        borderRadius: radii.rounded,
      }}
    >
      {status}
    </div>
  )
}
