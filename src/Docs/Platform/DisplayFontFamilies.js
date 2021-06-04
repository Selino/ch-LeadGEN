import React from "react"
import fontFamilies from "../../tokens/fontFamilies"

const DisplayFonts = () => {
  const myFonts = Object.keys(fontFamilies).map((key) => (
    <tr key={key} className='border-b border-gray4'>
      <td className='p-2'>{key}</td>
      <td
        className='p-2'
        style={{
          fontFamily: `${fontFamilies[key]}, ${key}, sans-serif`,
          fontWeight: key,
        }}
      >
        <span className='text-4xl'>Aa</span>
        <br />
        {fontFamilies[key]}
      </td>
      <td className='p-2'>1.0.0</td>
    </tr>
  ))
  return (
    <table className='w-full'>
      <tr className='bg-gray5'>
        <th className='p-2 text-sm'>Token</th>
        <th className='p-2 text-sm'>Example</th>
        <th className='p-2 text-sm'>Released</th>
      </tr>
      {myFonts}
    </table>
  )
}

export default DisplayFonts
