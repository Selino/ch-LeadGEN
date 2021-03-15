import React from "react"

export default function DisplayUnit(props) {
  let displayUnit = null
  switch (props.unit) {
    case "hundred":
      displayUnit = "h"
      break
    case "thousand":
      displayUnit = "k"
      break
    case "million":
      displayUnit = "M"
      break
    case "billion":
      displayUnit = "G"
      break
    case "trillion":
      displayUnit = "T"
      break

    default:
      displayUnit = null
      break
  }
  return <>{displayUnit}</>
}
