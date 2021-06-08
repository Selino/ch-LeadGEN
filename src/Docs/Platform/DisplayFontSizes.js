import React from "react"
import fontSizes from "tokens/fontSizes"

const DisplayFontSizes = () => {
  const myFonts = Object.keys(fontSizes).map((key) => (
    <tbody>
      <tr key={key} className='border-b border-gray4'>
        <td>{key}</td>
        <td>{fontSizes[key]}</td>
        <td>
          <span style={{ fontSize: fontSizes[key] }}>
            The quick brown fox jumped over the lazy dog.
          </span>
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
          <th>Size</th>
          <th>Example</th>
          <th>Released</th>
        </tr>
      </thead>
      {myFonts}
    </table>
  )
}

export default DisplayFontSizes
