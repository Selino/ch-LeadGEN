import React from "react"
import { ReactSVG } from "react-svg"

function DisplayIcon({ name }) {
  return (
    <div key={name}>
      <ReactSVG src={"/graphics/" + name + ".svg"} className='svg-xl' />
      <div className='text-center text-sm text-brand mt-1'>{name}</div>
    </div>
  )
}

const ShowAllIcons = ({ type }) => {
  let myArray = []
  switch (type) {
    default:
      myArray = [
        "icoArrowCircleDown",
        "icoArrowCircleUp",
        "icoCalendar",
        "icoCarretDown",
        "icoCheck",
        "icoCheckSquare",
        "icoChevronL",
        "icoChevronR",
        "icoCloseX",
        "icoCloudDownload",
        "icoEqualCircle",
        "icoExclamationTriangle",
        "icoGripVertical",
        "icoHamburger",
        "icoInfoCircle",
        "icoLocation",
        "icoPhone",
        "icoSearch",
        "icoSliders",
        "icoSquare",
      ]
      break
    case "docs":
      myArray = ["docExcel", "docPdf"]
      break
  }
  return (
    <div className='mb-4 grid gap-7 grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5 mt-3'>
      {myArray.map((a) => {
        return <DisplayIcon key={a} name={a} />
      })}
    </div>
  )
}

export default ShowAllIcons
