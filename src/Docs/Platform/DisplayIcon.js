import React from "react"
import { ReactSVG } from "react-svg"
import colors from "../../tokens/colors"

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
        "utiArrowCircleDown",
        "utiArrowCircleUp",
        "utiCalendar",
        "utiCarretDown",
        "utiCheck",
        "utiCheckSquare",
        "utiChevronL",
        "utiChevronR",
        "utiCloseX",
        "utiCloudDownload",
        "utiEqualCircle",
        "utiExclamationTriangle",
        "utiGripVertical",
        "utiHamburger",
        "utiInfoCircle",
        "utiLocation",
        "utiPhone",
        "utiSearch",
        "utiSliders",
        "utiSquare",
      ]
      break
    case "docs":
      myArray = ["docExcel", "docPdf", "docCsv", "docText"]
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
