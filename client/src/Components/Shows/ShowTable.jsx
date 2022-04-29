import * as React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "axios";
import "../Manager/Employees/R.css";
import { useHistory } from "react-router-dom";

export default function Grid() {
  const history = useHistory();
  const [show, setShow] = React.useState([]);
  const [reload, setReload] = React.useState(false);

  const URL = process.env.REACT_APP_SERVER;

  const getShows = async () => {
    const res = await axios.get(`${URL}/show/all/movie-name`);
    setShow(
      res.data.map((_show) => ({
        id: _show.showid,
        hallId: _show.hallno,
        movieName: _show.moviename,
        price: _show.price,
        time: _show.starttime,
      }))
    );

    setReload(false);
  };

  React.useEffect(() => {
    getShows();
  }, [reload]);
  // const [rows, setRows] = React.useState(emp);

  const deleteUser = async (id) => {
    await axios.delete(`${URL}/show/${id}`);
    setReload(true);
  };
  const editShow = async (id) => {
    history.push(`/edit-show/${id}`);
  };

  const columns = React.useMemo(
    () => [
      {
        field: "id",
        headerName: "Show ID",
        type: "string",
        headerAlign: "center",
        align: "center",
        flex: 1,
      },
      {
        field: "hallId",
        headerName: "Hall ID",
        type: "string",
        headerAlign: "center",
        align: "center",
        flex: 1,
      },
      {
        field: "movieName",
        headerName: "Movie Name",
        type: "string",
        headerAlign: "center",
        align: "center",
        flex: 4,
      },
      {
        field: "time",
        headerName: "Time",
        type: "string",
        headerAlign: "center",
        align: "center",
        flex: 2,
      },
      {
        field: "price",
        headerName: "Price",
        type: "string",
        headerAlign: "center",
        align: "center",
        flex: 1,
      },

      {
        field: "del",
        headerName: "Delete",
        headerAlign: "center",
        align: "center",
        type: "actions",
        flex: 1,
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={() => {
              deleteUser(params.id);
            }}
          />,
        ],
      },
      {
        field: "view",
        flex: 1,
        type: "actions",
        headerName: "View More",
        headerAlign: "center",
        align: "center",
        width: 100,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<ArrowForwardIcon />}
            label="View More"
            onClick={() => {
              editShow(params.id);
            }}
          />,
        ],
      },
    ],
    [deleteUser, editShow]
  );

  return (
    <div className="__bg">
      <div className="row text-center __bg">
        <h2 className="mb-2 _heading ">All Shows</h2>
      </div>
      <div class="text-center" style={{ marginTop: 20 }}>
        <a href="/add-show" type="button" class="btn btn-dark col-1 mb-5">
          Add Show
        </a>
      </div>
      <div className="" style={{ height: 550, width: "60%", margin: "auto" }}>
        <DataGrid columns={columns} rows={show} />
      </div>
    </div>
  );
}
