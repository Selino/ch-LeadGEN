import React from "react"
import colors from "../../tokens/colors"
import fontSizes from "../../tokens/fontSizes"
import spacing from "../../tokens/spacing"
import fontWeights from "../../tokens/fontWeights"
import fontFamilies from "../../tokens/fontFamilies"

export default function PageTitle(props) {
  return (
    <div
      style={{
        paddingTop: spacing.small,
        paddingLeft: spacing.medium,
        fontStyle: "italic",
        fontSize: fontSizes.h4,
        color: colors.brandLeadGen,
        fontWeight: fontWeights.light,
      }}
    >
      {props.title}
    </div>
  )
}
