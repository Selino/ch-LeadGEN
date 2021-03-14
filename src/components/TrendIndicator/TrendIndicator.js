import React from "react"
import { ReactComponent as ArrowDown } from "../../graphics/icoArrowCircleDown.svg"
import { ReactComponent as ArrowUp } from "../../graphics/icoArrowCircleUp.svg"

export default function TrendIndicator(props) {
  const { prevNumber = 2, number = 4 } = props
  const trendVariant = "svg-primary"
  return (
    <div>
      {number > prevNumber ? (
        <ArrowUp className={trendVariant} />
      ) : (
        <ArrowDown className={trendVariant} />
      )}
    </div>
  )
}
