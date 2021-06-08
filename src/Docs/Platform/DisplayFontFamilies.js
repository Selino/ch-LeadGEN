import React from "react"
import fontFamilies from "tokens/fontFamilies"

const DisplayFonts = () => {
  const myFonts = Object.keys(fontFamilies).map((key) => (
    <tbody>
      <tr key={key} className='border-b border-gray4'>
        <td>{key}</td>
        <td
          style={{
            fontFamily: `${fontFamilies[key]}, ${key}, sans-serif`,
            fontWeight: key,
          }}
        >
          <span className='text-4xl'>Aa</span>
          <br />
          {fontFamilies[key]}
        </td>
        <td>1.0.0</td>
      </tr>
    </tbody>
  ))
  return (
    <table className='storybook-table'>
      <thead>
        <tr>
          <th>Token</th>
          <th>Example</th>
          <th>Released</th>
        </tr>
      </thead>
      {myFonts}
    </table>
  )
}

export default DisplayFonts
