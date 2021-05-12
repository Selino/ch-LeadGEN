import React from "react"
import { ReactSVG } from "react-svg"

function DisplayIcon({ name = "icoCalendar", styled = "h-8" }) {
  return (
    <div className=''>
      <ReactSVG src={"/graphics/" + name + ".svg"} className='svg-xl' />
      <div className='text-center text-sm text-gray1 mt-1'>{name}</div>
    </div>
  )
}

const ShowAllIcons = () => {
  const myArray = [
    "icoArrowCircleDown",
    "icoArrowCircleUp",
    "icoCalendar",
    "icoCarretDown",
    "icoCheck",
    "icoCheckSquare",
    "icoChevronL",
    "icoChevronR",
    "icoCloseX",
  ]

  return (
    <div className='mb-4 grid gap-7 grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5 mt-3'>
      {myArray.map((a) => {
        return <DisplayIcon name={a} />
      })}
    </div>
  )
}

export default ShowAllIcons
