import React from "react"
import TrendIndicator from "../TrendIndicator/TrendIndicator"

export default function MetricCard(props) {
  const {
    number = null,
    prevNumber = null,
    label = "Metric Title",
    unit = null,
  } = props

  return (
    <div className='rounded-xl shadow box-content relative p-3'>
      <div>
        <span
          className='text-mobilevw tablet:text-tabletvw laptop:text-laptopvw'
          style={{ fontWeight: "900", lineHeight: "60%" }}
        >
          {number}
        </span>
        <span className='pl-1 font-medium text-md'>{unit}</span>
      </div>
      <div className='opacity-40 m-0 font-medium text-sm'>{label}</div>
      <div
        className='trend-arrow absolute'
        style={{ right: "1rem", top: "1rem" }}
      >
        <TrendIndicator number={number} prevNumber={prevNumber} />
      </div>
    </div>
  )
}
