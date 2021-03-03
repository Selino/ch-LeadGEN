import React from "react"
import colors from "../../tokens/colors"
import fontSizes from "../../tokens/fontSizes"
import spacing from "../../tokens/spacing"
import fontWeights from "../../tokens/fontWeights"
import radii from "../../tokens/radii"



export default function NavHeader(props) {
  const { variant } = props
  return (
    <div
      className='nav-header'
      style={{
        color: colors.graysGray1,
        padding: "0",
        fontSize: fontSizes.tiny,
        fontWeight: fontWeights.black,
        backgroundColor: variant,
        width: "100%",
      }}
    >
      Header goes here
    </div>
  )
}
