import React from "react"
import ChartistGraph from "react-chartist"
import Chartist from "chartist"

export default function KMOT() {
  const count = 15
  const max = 100
  const data = {
    labels: Chartist.times(count),
    series: [
      Chartist.times(count).map(Math.random).map(Chartist.mapMultiply(max)),
      Chartist.times(count).map(Math.random).map(Chartist.mapMultiply(max)),
    ],
  }

  const options = {
    width: "100%",
    height: 400,
    axisX: {
      labelInterpolationFnc: function (value, index) {
        return index % 1 === 0 ? value : null
      },
    },
  }

  return (
    <div className='metric-card-container'>
      <div className='metric-card-header'>Key Metrics Over Time</div>
      <div className='metric-card-body'>
        <ChartistGraph data={data} options={options} type='Line' />
        <div className='chart-key'>clicks impressions</div>
      </div>
    </div>
  )
}
