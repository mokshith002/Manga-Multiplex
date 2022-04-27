import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from "axios";
import "./R.css";
// const initialRows = [
//   {
//     id: 1,
//     name: 'Damien',
//     email:'1234@gmail.com',
//     role:'counter staff'
//   },
//   {
//     id: 2,
//     name: 'Damien',
//     email:'1234@gmail.com',
//     role:'counter staff'
//   },
//   {
//     id: 3,
//     name: 'Damien',
//     email:'1234@gmail.com',
//     role:'counter staff'
//   },
//   {
//     id: 4,
//     name: 'Damien',
//     email:'1234@gmail.com',
//     role:'counter staff'
//   },
//   {
//     id: 5,
//     name: 'Damien',
//     email:'1234@gmail.com',
//     role:'counter staff'
//   },
// ];



export default function Grid() {

  const [emp, setEmp] = React.useState([]);

const URL = `http://localhost:${5000}`;

const getEmps = async () => {
  const res = await axios.get(`${URL}/movie`);
  setEmp(res.data.map(_emp => ({
    id: _emp.movieid,
    name: _emp.moviename
  })))
}

React.useEffect(() => {
  getEmps();
})
  // const [rows, setRows] = React.useState(emp);

  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setEmp((prevEmp) => prevEmp.filter((row) => row.id !== id));
      });
    },
    [],
  );
  const viewEmp = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setEmp((prevEmp) => prevEmp.filter((row) => row.id !== id));
      });
    },
    [],
  );

  const columns = React.useMemo(
    () => [
      { field: 'id', headerName: 'Movie ID', type: 'string', headerAlign: 'center', align: 'center', flex:1 },
      { field: 'name',  headerName: 'Movie Name', type: 'string', headerAlign: 'center', align: 'center', flex:2},
      
      {
        field: 'del',
        headerName: 'Delete',headerAlign: 'center', align: 'center',
        type: 'actions',
        flex: 1,
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
        ],
      },
      {
        field: 'view',
        flex: 1,
        type: 'actions',
        headerName: 'View More',headerAlign: 'center', align: 'center',
        width: 100,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<ArrowForwardIcon />}
            label="View More"
            onClick={viewEmp(params.id)}
          />,
        ],
      },
    ],
    [deleteUser,viewEmp],
  );

  return (
    <div className="__bg">
      <div className="row text-center __bg">
        <h2 className="mb-5 _heading ">All Movies</h2>
      </div>
      <div className="" style={{ height: 550, width: "60%", margin: "auto" }}>
        <DataGrid columns={columns} rows={emp} />
      </div>
    </div>
  );
}
