import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from "axios";
import "./R.css";
import { useHistory } from 'react-router-dom';



export default function Grid() {

  const history = useHistory();
  const [emp, setEmp] = React.useState([]);
  const [reload, setReload] = React.useState(false);

const URL = process.env.REACT_APP_SERVER;

const getEmps = async () => {
  const res = await axios.get(`${URL}/employees`);
  console.log(res.data[0].contactno);
  setEmp(
    res.data.map((_emp) => ({
      id: _emp.empid,
      name: _emp.empname,
      role: _emp.role,
      contact: _emp.contactno,
      email: _emp.email
    }))
  );

  setReload(false);
}

React.useEffect(() => {
  getEmps();
},[reload])
  // const [rows, setRows] = React.useState(emp);

  const deleteUser = async (id) => {
    await axios.delete(`${URL}/employees/${id}`);
    setReload(true);
  };
  const viewEmp = async (id) => {
    history.push(`/profile/${id}`);
  }

  const columns = React.useMemo(
    () => [
      { field: 'id', headerName: 'Employee ID', type: 'string', headerAlign: 'center', align: 'center', flex:1 },
      { field: 'name',  headerName: 'Employee Name', type: 'string', headerAlign: 'center', align: 'center', flex:2},
      { field: 'role', headerName: 'Role', type: 'string', headerAlign: 'center', align: 'center', flex:1 },
      { field: 'contact',  headerName: 'Contact Number', type: 'string', headerAlign: 'center', align: 'center', flex:2},
      { field: 'email',  headerName: 'Email', type: 'string', headerAlign: 'center', align: 'center', flex:2},
      
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
            onClick={ () => {deleteUser(params.id)}}
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
            onClick={() => {viewEmp(params.id)}}
          />,
        ],
      },
    ],
    [deleteUser,viewEmp],
  );

  return (
    <div className="__bg">
      <div className="row text-center __bg">
        <h2 className="mb-5 _heading ">All Employees</h2>
      </div>
      <div className="" style={{ height: 550, width: "60%", margin: "auto" }}>
        <DataGrid columns={columns} rows={emp} />
      </div>
    </div>
  );
}
