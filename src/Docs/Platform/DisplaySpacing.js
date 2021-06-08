import React from "react"
import spacing from "tokens/spacing"

const DisplaySpacing = () => {
  const mySpacing = Object.keys(spacing).map((key) => (
    <div key={key} className='text-sm'>
      <div className='h-8 bg-gray4' style={{ width: spacing[key] }}></div>
      {key} <br />
      {spacing[key]}
    </div>
  ))
  return <div className='grid grid-cols-3 gap-4'>{mySpacing}</div>
}

export default DisplaySpacing
