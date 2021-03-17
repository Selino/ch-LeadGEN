import React from "react"
import { ReactComponent as ArrowDown } from "../../graphics/icoArrowCircleDown.svg"
import { ReactComponent as ArrowUp } from "../../graphics/icoArrowCircleUp.svg"
import { ReactComponent as Equal } from "../../graphics/icoEqualCircle.svg"

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
        <Equal className='svg-secondary' />
      )}
      {baseValue == null && <></>}
    </>
  )
}
