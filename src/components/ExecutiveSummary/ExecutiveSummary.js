import React from "react"
import { getSampleData } from "./ExecutiveSummaryData"
import Badge from "../Badge/Badge"
import { Button } from "react-bootstrap"
import BootstrapTable from "react-bootstrap-table-next"
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit"
import MiniBar from "../MiniBar/MiniBar"
import moment from "moment"
import Dinero from "dinero.js"
import styled from "@emotion/styled"
import colors from "../../tokens/colors"
import fontSizes from "../../tokens/fontSizes"
import radii from "../../tokens/radii"
import {
  faCloudDownloadAlt,
  faSlidersH,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
    border: solid 1px #ccc;
    border-radius: ${radii.soft};
  }

  .table-header {
    font-variant-caps: all-small-caps;
    background-color: #f5f5f5;
  }

  .table-header-container {
    padding: 0.5rem;
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
    width: 300px;
  }

  .controls {
    float: right;
  }

  .controls > .btn {
    margin-left: 1rem;
  }

  /* pagination */

  .react-bootstrap-table-pagination {
    padding: 0 16px;
    text-align: left;
  }

  .react-bootstrap-table-pagination-total {
    font-size: ${fontSizes.sub};
  }

  .page-link {
    color: ${colors.primaryInactive};
  }

  .btn-primary,
  .page-item.active .page-link {
    color: ${colors.white};
    background-color: ${colors.primaryInactive};
    border-color: ${colors.primaryInactive};
  }

  .btn-primary:hover,
  .page-item.active .page-link:hover {
    color: ${colors.white};
    background-color: ${colors.primaryActive};
    border-color: ${colors.primarySelected};
  }

  .table-hover tbody tr:hover {
    background-color: ${colors.alertWarningBackground};
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
          Perc={Math.round(myPerc)}
          daysInMarket={row.daysInMarket}
          forGroundColor={colors.primaryInactive}
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
          Perc={Math.round(myPerc)}
          daysInMarket={row.daysInMarket}
          forGroundColor={colors.alertSuccess}
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
    let variant = colors.graysGray2
    if (status === "live") {
      variant = colors.primaryInactive
    }
    return <Badge text={status} variant={variant} />
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
      style: { maxWidth: "200px" },
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
      style: { maxWidth: "200px" },
    },
    {
      dataField: "spendToDate",
      text: "Spend to Date",
      sort: true,
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
        bootstrap4={true}
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
              <div className='controls'>
                <Button variant='outline-secondary'>
                  Setttings <FontAwesomeIcon icon={faSlidersH} />
                </Button>
                <ExportCSVButton {...props.csvProps} className='btn-primary'>
                  Export <FontAwesomeIcon icon={faCloudDownloadAlt} />
                </ExportCSVButton>
              </div>
            </div>

            <BootstrapTable
              {...props.baseProps}
              exportCSV='true'
              bordered={false}
              striped={false}
              hover={true}
              condensed={false}
              headerClasses='table-header'
              pagination={paginationFactory({
                showTotal: true,
                paginationTotalRenderer: customTotal,
              })}
            />
          </div>
        )}
      </ToolkitProvider>
    </Emotion>
  )
}
