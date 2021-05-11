import React from "react"
import { ReactSVG } from "react-svg"

/**

Consistent use of a Primary Blue is used to avoid adding noise to the visual impact. Avoid using additonal colors to add meaning to the context.

When the baseValue is provided it is compared to the value prop. The displayed icon indicates if the difference is higher, lower, or equal.
**/

export default function TrendIndicator(props) {
  const { value, baseValue } = props
  return (
    <>
      {value > baseValue && baseValue != null && (
        <ReactSVG src='/graphics/icoArrowCircleDown.svg' />
      )}
      {value < baseValue && baseValue != null && (
        <ReactSVG src='/graphics/icoArrowCircleUp.svg' />
      )}
      {value === baseValue && baseValue != null && (
        <ReactSVG src='/graphics/icoEqualCircle.svg' />
      )}
      {baseValue == null && <></>}
    </>
  )
}
