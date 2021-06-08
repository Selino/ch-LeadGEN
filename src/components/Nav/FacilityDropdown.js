import React from "react"
import { NavDropdown, Form } from "react-bootstrap"
import { getSampleData } from "components/ExecutiveSummary/ExecutiveSummaryData"

const myData = getSampleData()
const getUnique = (arr, comp) => {
  // store the comparison  values in array
  const unique = arr
    .map((e) => e[comp])

    // store the indexes of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the false indexes & return unique objects
    .filter((e) => arr[e])
    .map((e) => arr[e])

  return unique
}

const onCheckHandler = () => {}

export default function FacilityDropdown(props) {
  const final = getUnique(myData, "name")
  return (
    <Form onChange={onCheckHandler()}>
      <Form.Group controlId='formBasicCheckbox'>
        {final.map((a) => {
          return (
            <NavDropdown.Item key={a.id}>
              <Form.Check
                id={a.id}
                type='checkbox'
                label={a.name}
                defaultChecked
              />
            </NavDropdown.Item>
          )
        })}
      </Form.Group>
    </Form>
  )
}
