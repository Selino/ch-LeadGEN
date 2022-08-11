import React from "react"
import fontWeights from "tokens/fontWeights"

const DisplayFontWeights = () => {
  const myFonts = Object.keys(fontWeights).map((key) => (
    <tr key={key} className='border-b border-gray4'>
      <td>{key}</td>
      <td>{fontWeights[key]}</td>
      <td style={{ fontWeight: fontWeights[key] }}>
        Almost before we knew it, we had left the ground.
      </td>
      <td>1.0.0</td>
    </tr>
  ))
  return (
    <table className='storybook-table'>
      <thead>
        <tr>
          <th>Token</th>
          <th>Weight</th>
          <th>Example</th>
          <th>Released</th>
        </tr>
      </thead>
      <tbody>{myFonts}</tbody>
    </table>
  )
}

export default DisplayFontWeights
