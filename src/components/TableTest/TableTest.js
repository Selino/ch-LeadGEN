import React from "react"
import Table from "react-tailwind-table"
import "react-tailwind-table/dist/index.css"

interface Iprop {
  rows: Irow[];
  columns: Icolumn[];
  row_render?: (
    row: Irow,
    col: Icolumn,
    display_value: string
  ) => JSX.Element | string;
  per_page?: number;
  no_content_text?: string;
  debounce_search?: number;
  table_header?: string;
  show_search?: boolean;
}

interface Irow {
  [key: string]: any;
}

type Irows = Irow[]

//The full data format can be
var rows: Irows = [
  {
    id: 1,
    name: "Sadio Mane",
    country_id: 3,
    club_id: 2,
    front_end_position: {
      name: {
        full_name: "Forward",
        short_code: "FW",
      },
      id: 2,
    },
  },
  {
    id: 3,
    name: "Virgil VanDijk",
    country_id: 30,
    club_id: 2,
    front_end_position: {
      name: {
        full_name: "Defence",
        short_code: "DF",
      },
      id: 2,
    },
  },
]

interface Icolumn {
  //Used to get string data from the each row object
  field: string; //This field can have a full stop(.) will allow us to read further into nested objects

  //This will be used to display in the table heading
  use: string;

  //Indicates that of this column should be used to search (optional)
  use_in_search?: boolean;

  //Indicates If this property should be used displayed in the table header (optional)
  use_in_display?: boolean;
}

type Icolumns = Icolumn[]

/**
 * The Example rows above can have its column data looking thus.
 */

var columns: Icolumns = [
  {
    field: "front_end_position.name.full_name",
    use: "Position",
    //Will not be used in search filtering
    use_in_search: false,
  },
  {
    field: "name",
    use: "Player Name",
  },
  {
    field: "country_id",
    use: "Country",

    //Will not be displayed in the table
    use_in_display: false,
  },
  {
    field: "club_id",
    use: "Club Details",
  },
]

export default function TableTest() {
  return <Table columns={columns} rows={rows} />
}
