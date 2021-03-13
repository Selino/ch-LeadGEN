import React from "react"
import { ReactComponent as ArrowDown } from "../../graphics/icoArrowCircleDown.svg"

export default function MetricCard(props) {
  const number = props.number ? props.number : null
  const label = props.label ? props.label : "Metric Title"
  const unit = props.unit ? props.unit : null

  return (
    <div className='rounded-xl shadow box-content relative p-4'>
      <div className='' style={{}}>
        <span
          className=''
          style={{ fontSize: "4vw", fontWeight: "900", lineHeight: "60%" }}
        >
          {number}
        </span>
        <span className='pl-1 font-medium' style={{ fontSize: "1.5vw" }}>
          {unit}
        </span>
      </div>
      <div className='opacity-40 m-0 font-medium' style={{ fontSize: "1.3vw" }}>
        {label}
      </div>
      <div
        className='trend-arrow absolute'
        style={{ right: "1rem", top: "1rem" }}
      >
        <ArrowDown className='svg-success' />
      </div>
    </div>
  )
}
