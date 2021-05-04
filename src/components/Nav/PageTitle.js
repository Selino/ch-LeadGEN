import React from "react"
import colors from "../../tokens/colors"
import fontSizes from "../../tokens/fontSizes"
import spacing from "../../tokens/spacing"
import fontWeights from "../../tokens/fontWeights"

export default function PageTitle(props) {
  const { title = "Page Title" } = props
  return (
    <div
      style={{
        paddingTop: "5rem",
        paddingLeft: spacing.medium,
        fontStyle: "italic",
        fontSize: fontSizes.h4,
        color: colors.brandLeadGen,
        fontWeight: fontWeights.light,
      }}
    >
      {title.replace(/[^\w\s]/gi, "")}
    </div>
  )
}
