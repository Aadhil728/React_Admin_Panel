import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";
import { userRows } from "../../data";
import { useState } from "react";
import AddUser from "../../components/addUser/AddUser";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 250,
    editable: true,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 150,
    editable: true,
  },
  {
    field: "createdAt",
    type: "string",
    headerName: "Created At",
    width: 150,
    editable: true,
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean"
  },
];

const Users = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add new User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <AddUser slug="user" columns={columns} setOpen={setOpen}/>}
    </div>
  );
};

export default Users;
