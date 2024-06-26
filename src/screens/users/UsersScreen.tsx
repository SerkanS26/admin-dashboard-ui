import DataTable from "../../components/dataTable/DataTable";
import "./users.scss";

const UsersScreen = () => {
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add new User</button>
      </div>
      <DataTable />
    </div>
  );
};

export default UsersScreen;
