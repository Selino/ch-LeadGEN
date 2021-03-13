import React from "react"

export default function MetricCard() {
  return (
    <div
      className='rounded-2xl shadow box-content'
      style={{ width: "300px", height: "200px" }}
    >
      <div className='metric-number absolute inset-1'>999</div>
      <div className='metric-label absolute'>label</div>
      <div className='trend-arrow absolute inset-0'>arrow</div>
    </div>
  )
}
