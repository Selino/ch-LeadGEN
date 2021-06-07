import React from "react"
import { getSampleData } from "./ExecutiveSummaryData"
import colors from "../../tokens/colors"
import Badge from "../Badge/Badge"
import { Button } from "react-bootstrap"
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit"
import MiniBar from "../MiniBar/MiniBar"
import moment from "moment"
import Dinero from "dinero.js"
import styled from "@emotion/styled"
import fontSizes from "../../tokens/fontSizes"
import radii from "../../tokens/radii"
import {
  faCloudDownloadAlt,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from "react-bootstrap-table2-paginator"
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css"
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css"

const Emotion = styled.div`
  th,
  td {
    text-align: left;
  }

  table {
    font-size: 0.9rem;
    font-family: Arial, Helvetica, sans-serif;
    table-layout: auto !important;
  }

  .table-container {
    border-radius: ${radii.soft};
    background-color: ${colors.white};
  }

  .table-header {
    font-variant-caps: all-small-caps;
    background-color: ${colors.graysGray1};
    color: ${colors.graysGray4};
  }

  .table-header-container {
    padding: 0.5rem 1rem 0;
    line-height: -0.2rem;
    text-align: left;
  }

  .table-name-container {
    display: inline-block;
    height: 1.5rem;
    max-width: 200px;
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: solid 1px #ccc;
    font-weight: bold;
    font-size: 0.9rem;
    font-variant-caps: all-small-caps;
  }

  .searchbar-container {
    display: inline-block;
  }

  .controls {
    float: right;
  }

  .controls > .btn {
    margin-left: 1rem;
  }

  .react-bootstrap-table-pagination-total {
    font-size: ${fontSizes.sub};
  }

  .page-link {
    color: ${colors.textInfoText};
  }

  .btn-primary,
  .page-item.active .page-link {
    color: ${colors.white};
    background-color: ${colors.buttonPrimaryInactive};
    border-color: ${colors.buttonPrimaryInactive};
  }

  .btn-primary:hover,
  .page-item.active .page-link:hover {
    color: ${colors.white};
    background-color: ${colors.primaryActive};
    border-color: ${colors.primarySelected};
  }

  .btn-success {
    color: ${colors.white};
    background-color: ${colors.alertSuccess};
    border-color: none;
  }

  .btn-success:hover {
    color: ${colors.white};
    background-color: ${colors.successHover};
    border-color: none;
  }

  .page-item.active .page-link {
    color: ${colors.white};
    background-color: ${colors.secondaryInactive};
    border-color: ${colors.secondaryInactive};
  }

  .page-item.active .page-link:hover {
    color: ${colors.white};
    background-color: ${colors.secondaryHover};
    border-color: ${colors.secondaryHover};
    border-color: none;
  }

  .table-hover tbody tr:hover {
    background-color: ${colors.alertWarningBackground};
  }

  .react-bootstrap-table table {
    table-layout: auto;
  }

  /* pagination */

  .react-bootstrap-table-pagination {
    padding: 0 1rem 1rem;
    text-align: left;
  }

  .pagination {
    margin-bottom: 0 !important;
  }
`

const myData = getSampleData()

const { ExportCSVButton } = CSVExport

export default function ExecutiveSummary() {
  const daysInMarketFormatter = (cell, row) => {
    const myPerc = (cell / row.totalDaysInMarket) * 100
    return (
      <div>
        {cell}
        <MiniBar
          perc={Math.round(myPerc)}
          daysInMarket={row.daysInMarket}
          forGroundColor={colors.info}
        />
      </div>
    )
  }

  const displayDate = (cell) => {
    const date = moment(cell).format("MM/DD/YYYY").toString()
    return <div>{date}</div>
  }

  const displaySpend = (cell, row) => {
    const spend = Dinero({ amount: cell, precision: 5 }).toRoundedUnit(1)
    const myPerc = (cell / row.budget) * 100
    return (
      <div>
        ${spend}k
        <MiniBar
          perc={Math.round(myPerc)}
          daysInMarket={row.daysInMarket}
          forGroundColor={colors.success}
        />
      </div>
    )
  }

  const displayBudget = (cell) => {
    const budget = Dinero({ amount: cell }).toFormat("$0,0")
    return <div>{budget}</div>
  }

  const displayCpl = (cell) => {
    const cpl = Dinero({ amount: cell }).toFormat("$0,0.00")
    return <div>{cpl}</div>
  }

  const displayStatus = (status) => {
    let text = colors.graysGray4
    let bg = colors.graysGray1

    if (status === "live") {
      text = colors.success
      // bg = colors.backgroundInfo
    } else if (status === "paused") {
      text = colors.textWarning
      // bg = colors.backgroundWarning
    }
    return <Badge status={status} text={text} bg={bg} />
  }

  const { SearchBar } = Search

  const columns = [
    {
      dataField: "status",
      text: "Status",
      sort: true,
      formatter: displayStatus,
    },
    {
      dataField: "serviceLine",
      text: "Service Line",
      sort: true,
      style: { maxWidth: "128px" },
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
      style: { minWidth: "144px" },
    },
    {
      dataField: "spendToDate",
      text: "Spend to Date",
      sort: true,
      style: { whiteSpace: "nowrap" },
      formatter: displaySpend,
    },
    {
      dataField: "budget",
      text: "Budget",
      sort: true,
      formatter: displayBudget,
    },
    {
      dataField: "leads",
      sort: true,
      text: "Leads",
    },
    {
      dataField: "averageCpl",
      text: "AVG CPL",
      sort: true,
      formatter: displayCpl,
    },
    {
      dataField: "daysInMarket",
      text: "Days In Market",
      sort: true,
      style: { whiteSpace: "nowrap" },
      formatter: daysInMarketFormatter,
    },
    {
      dataField: "startDate",
      text: "Launch Date",
      sort: true,
      formatter: displayDate,
    },
    {
      dataField: "endDate",
      text: "End Date",
      sort: true,
      formatter: displayDate,
    },
  ]

  const customTotal = (from, to, size) => (
    <span
      className='react-bootstrap-table-pagination-total'
      style={{ marginLeft: "1rem" }}
    >
      Showing {from} to {to} of {size} Results
    </span>
  )

  return (
    <Emotion>
      <ToolkitProvider
        bootstrap4
        keyField='id'
        data={myData}
        columns={columns}
        exportCSV
        search
      >
        {(props) => (
          <div className='body-container table-container'>
            <div className='table-header-container'>
              <div className='table-name-container'>Strategy List</div>
              <div className='searchbar-container'>
                <SearchBar {...props.searchProps} />
              </div>
              <div className='controls hidden md:block'>
                <Button variant='outline-secondary'>
                  Setttings <FontAwesomeIcon icon={faSlidersH} />
                </Button>
                <ExportCSVButton {...props.csvProps} className='btn-success'>
                  Export <FontAwesomeIcon icon={faCloudDownloadAlt} />
                </ExportCSVButton>
              </div>
            </div>

            <BootstrapTable
              {...props.baseProps}
              exportCSV='true'
              bordered={false}
              hover={true}
              condensed={false}
              headerClasses='table-header'
              pagination={paginationFactory({
                showTotal: true,
                paginationTotalRenderer: customTotal,
              })}
              striped={false}
              wrapperClasses='table-responsive'
            />
          </div>
        )}
      </ToolkitProvider>
    </Emotion>
  )
}
