import React from "react"
import fontWeights from "tokens/fontWeights"

const DisplayFontWeights = () => {
  const myFonts = Object.keys(fontWeights).map((key) => (
    <tr key={key} className='border-b border-gray4'>
      <td className='p-4'>{key}</td>
      <td className='p-4'>{fontWeights[key]}</td>
      <td className='p-4' style={{ fontWeight: fontWeights[key] }}>
        Almost before we knew it, we had left the ground.
      </td>
      <td className='p-4'>1.0.0</td>
    </tr>
  ))
  return (
    <table className='w-full'>
      <tr className='bg-gray2'>
        <th className='p-4 text-sm'>Token</th>
        <th className='p-4 text-sm'>Weight</th>
        <th className='p-4 text-sm'>Example</th>
        <th className='p-4 text-sm'>Released</th>
      </tr>
      {myFonts}
    </table>
  )
}

export default DisplayFontWeights
