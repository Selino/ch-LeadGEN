import React from "react"
import colors from "../../tokens/colors"

const DisplayColors = () => {
  function rgba2hex(orig) {
    let a,
      rgb = orig
        .replace(/\s/g, "")
        .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
      alpha = ((rgb && rgb[4]) || "").trim(),
      hex = rgb
        ? (rgb[1] | (1 << 8)).toString(16).slice(1) +
          (rgb[2] | (1 << 8)).toString(16).slice(1) +
          (rgb[3] | (1 << 8)).toString(16).slice(1)
        : orig

    if (alpha !== "") {
      a = alpha
    } else {
      a = "1"
    }
    // multiply before convert to HEX
    a = ((a * 255) | (1 << 8)).toString(16).slice(1)
    hex = hex

    return hex
  }

  const myColors = Object.keys(colors).map((key) => (
    <div key={key} className='text-sm'>
      <div
        className='w-full h-16'
        style={{ backgroundColor: colors[key] }}
      ></div>
      {key} <br />
      {colors[key]} <br />#{rgba2hex(colors[key])}
    </div>
  ))
  return <div className='grid grid-cols-3 gap-4'>{myColors}</div>
}

export default DisplayColors
