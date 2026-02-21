import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { UsersListController } from "./UsersListController";

export const UsersListView = () => {
  const navigate = useNavigate();

  const handleEdit = (user) => {
    navigate(`/users/form/${user.id}`);
  };

  const handleCreate = () => {
    navigate("/users/form");
  };

  return (
    <div style={{ padding: '24px', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Button type="primary" onClick={handleCreate}>Add New User</Button>
      </div>

      <UsersListController onClick={handleEdit} />
    </div>
  );
};
