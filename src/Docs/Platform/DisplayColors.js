import React from "react"
import colors from "../../tokens/colors"

function ColorSwatch(color) {
  return <div key={color.name}>{color.value}</div>
}

const DisplayColors = () => {
  const myColors = Object.keys(colors).map((key) => (
    <div key={key} className='text-sm'>
      <div
        className='w-full h-16'
        style={{ backgroundColor: colors[key] }}
      ></div>
      {key} <br />
      {colors[key]}
    </div>
  ))
  return <div className='grid grid-cols-3 gap-4'>{myColors}</div>
}

export default DisplayColors
