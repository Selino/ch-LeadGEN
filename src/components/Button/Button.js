import React from "react"
import PropTypes from "prop-types"
import { Button as BSButton } from "react-bootstrap"

export default function Button(props) {
  return <BSButton {...props}>{props.text}</BSButton>
}

Button.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
}
