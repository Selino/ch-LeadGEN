import React from "react"
import fontFamilies from "tokens/fontFamilies"

const DisplayFonts = () => {
  const myFonts = Object.keys(fontFamilies).map((key) => (
    <tr key={key} className='border-b border-gray4'>
      <td className='p-4'>{key}</td>
      <td
        className='p-4'
        style={{
          fontFamily: `${fontFamilies[key]}, ${key}, sans-serif`,
          fontWeight: key,
        }}
      >
        <span className='text-4xl'>Aa</span>
        <br />
        {fontFamilies[key]}
      </td>
      <td className='p-4'>1.0.0</td>
    </tr>
  ))
  return (
    <table className='w-full'>
      <tr className='bg-gray2'>
        <th className='p-4 text-sm'>Token</th>
        <th className='p-4 text-sm'>Example</th>
        <th className='p-4 text-sm'>Released</th>
      </tr>
      {myFonts}
    </table>
  )
}

export default DisplayFonts
