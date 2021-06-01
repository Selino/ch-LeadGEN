import React from "react"
import fontFamilies from "../../tokens/fontFamilies"

const DisplayFonts = () => {
  const myFonts = Object.keys(fontFamilies).map((key) => (
    <div key={key} className='text-sm'>
      {key} <br />
      {fontFamilies[key]}
    </div>
  ))
  return <div className='grid grid-cols-4 gap-4'>{myFonts}</div>
}

export default DisplayFonts
