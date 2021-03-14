import React from "react"

export default function DisplayCurrency(props) {
  let displayCurrency = null
  switch (props.code) {
    case "USD":
      displayCurrency = "$"
      break
    case "EUR":
      displayCurrency = "€"
      break
    case "GBP":
      displayCurrency = "£"
      break
    case "JPY":
      displayCurrency = "¥"
      break
    case "CHF":
      displayCurrency = "ƒ"
      break

    default:
      displayCurrency = null
      break
  }
  return <span>{displayCurrency}</span>
}
