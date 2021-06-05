import React from "react"
import fontSizes from "../../tokens/fontSizes"

const DisplayFontSizes = () => {
  const myFonts = Object.keys(fontSizes).map((key) => (
    <tr key={key} className='border-b border-gray4'>
      <td className='p-4'>{key}</td>
      <td className='p-4'>{fontSizes[key]}</td>
      <td className='p-4'>
        <span style={{ fontSize: fontSizes[key] }}>
          The quick brown fox jumped over the lazy dog.
        </span>
      </td>
      <td className='p-4'>1.0.0</td>
    </tr>
  ))
  return (
    <table className='w-full'>
      <tr className='bg-gray2'>
        <th className='p-4 text-sm'>Token</th>
        <th className='p-4 text-sm'>Size</th>
        <th className='p-4 text-sm'>Example</th>
        <th className='p-4 text-sm'>Released</th>
      </tr>
      {myFonts}
    </table>
  )
}

export default DisplayFontSizes
