import React from "react"
import { ReactComponent as ArrowDown } from "../../graphics/icoArrowCircleDown.svg"
import { ReactComponent as ArrowUp } from "../../graphics/icoArrowCircleUp.svg"
import { ReactComponent as Equal } from "../../graphics/icoEqualCircle.svg"

/**

Consistent use of a Primary Blue is used to avoid adding noise to the visual impact. Avoid using additonal colors to add meaning to the context.

When the baseValue is provided it is compared to the value prop. The displayed icon indicates if the difference is higher, lower, or equal.
**/

export default function TrendIndicator(props) {
  const { value, baseValue } = props
  return (
    <>
      {value > baseValue && baseValue != null && (
        <ArrowUp className='svg-primary' />
      )}
      {value < baseValue && baseValue != null && (
        <ArrowDown className='svg-primary' />
      )}
      {value === baseValue && baseValue != null && (
        <Equal className='svg-primary' />
      )}
      {baseValue == null && <></>}
    </>
  )
}
