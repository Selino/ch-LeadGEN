import React from "react"
import fontSizes from "../../tokens/fontSizes"

const DisplayFonts = () => {
  const myFonts = Object.keys(fontSizes).map((key) => (
    <tr key={key} className='border-b border-gray4'>
      <td className='p-2'>{key}</td>
      <td className='p-2'>
        <span className='' style={{ fontSize: fontSizes[key] }}>
          The quick brown fox jumped over the lazy dog.
        </span>
        <br />
        {fontSizes[key]}
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
