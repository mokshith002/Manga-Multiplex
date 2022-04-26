import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const initialRows = [
  {
    id: 1,
    name: 'Damien',
    email:'1234@gmail.com',
    role:'counter staff'
  },
  {
    id: 2,
    name: 'Damien',
    email:'1234@gmail.com',
    role:'counter staff'
  },
  {
    id: 3,
    name: 'Damien',
    email:'1234@gmail.com',
    role:'counter staff'
  },
  {
    id: 4,
    name: 'Damien',
    email:'1234@gmail.com',
    role:'counter staff'
  },
  {
    id: 5,
    name: 'Damien',
    email:'1234@gmail.com',
    role:'counter staff'
  },
];

export default function Grid() {
  const [rows, setRows] = React.useState(initialRows);

  const deleteUser = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );
  const viewEmp = React.useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );

  const columns = React.useMemo(
    () => [
      { field: 'id', type: 'string' },
      { field: 'name', type: 'string' },
      {field: 'email',type:'string',width:200},
      {field: 'role',type:'string'},
      {
        field: 'del',
        headerName: 'Delete',
        type: 'actions',
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
        type: 'actions',
        headerName: 'View More',
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
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid columns={columns} rows={rows} />
    </div>
  );
}
