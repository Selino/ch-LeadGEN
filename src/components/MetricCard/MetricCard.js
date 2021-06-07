import React from "react"
import PropTypes from "prop-types"
import DisplayCurrency from "../DisplayCurrency/DisplayCurrency"
import DisplayUnit from "../DisplayUnit/DisplayUnit"
import TrendIndicator from "../TrendIndicator/TrendIndicator"

/**
Use the MetricCard to display insightful data in small chunks. These cards stretch to fill their parent on the horizontal axis and stack when the parent resizes on platform breakpoints.

- use multiple cards together to form dashboards
- use text only cards to convey insights in human readable copy
**/

export default function MetricCard(props) {
  const {
    currency = null,
    value = 999,
    baseValue = null,
    label = null,
    unit = null,
  } = props

  return (
    <div className='rounded-xl shadow-md box-content relative p-3 bg-white'>
      <div>
        <div className='inline-block align-top pl-1 font-medium text-md opacity-50'>
          <DisplayCurrency code={currency} />
        </div>
        <div className='inline-block text-mobilevw tablet:text-tabletvw laptop:text-laptopvw font-extrabold leading-none'>
          {value}
        </div>
        <div className='inline-block pl-1 font-medium'>
          <DisplayUnit unit={unit} />
        </div>
      </div>
      <div className='opacity-50 m-0 font-medium text-sm'>{label}</div>
      <div
        className='trend-arrow absolute'
        style={{ right: "1rem", top: "1rem" }}
      >
        <TrendIndicator value={value} baseValue={baseValue} />
      </div>
    </div>
  )
}

MetricCard.propTypes = {
  currency: PropTypes.string,
  value: PropTypes.number,
  baseValue: PropTypes.number,
  label: PropTypes.string,
  unit: PropTypes.string,
}
