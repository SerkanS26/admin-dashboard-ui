import "./dataTable.scss";

import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridToolbar,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => (
      <img
        src={params.row.img || "/noavatar.png"}
        alt="avatar"
        className="avatar"
      />
    ),
  },

  { field: "firstName", headerName: "first name", width: 150, editable: true },
  { field: "lastName", headerName: "last Name", width: 150, editable: true },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
];

const rows: GridRowsProp = [
  { id: 1, lastName: "Snow", firstName: "John", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Carsei", age: 45 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 35 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 25 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 30 },
  { id: 6, lastName: "Malisandre", firstName: "null", age: 35 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 20 },
  { id: 8, lastName: "Frances", firstName: "Rosini", age: 25 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 45 },
];

const DataTable = () => {
  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
