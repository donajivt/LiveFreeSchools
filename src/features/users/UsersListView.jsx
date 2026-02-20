import { Breadcrumb, Button } from "antd";
import { useState } from "react"
import { UsersListController } from "./UsersListController"
import { UserCreateController } from "./UserCreateController"
import { UserEditController } from "./UserEditController"

export const UsersListView = () => {

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isFormExpanded, setIsFormExpanded] = useState(false);

  const handleEdit = (user) => {
    setSelectedUserId(user.id);
    setIsFormExpanded(true);
  };

  const handleCreate = () => {
    setSelectedUserId(null);
    setIsFormExpanded(true);
  };

  return (
    <div>
      <Breadcrumb
        items={[
          { title: <a>Home</a> },
          { title: 'Users' },
        ]}
        style={{ marginBottom: 16 }}
      />
      <Button onClick={handleCreate}>Add New User</Button>

      <UsersListController onClick={handleEdit} />

      {selectedUserId ? (
        <UserEditController
          userId={selectedUserId}
          isExpanded={isFormExpanded}
          setIsExpanded={setIsFormExpanded}
        />
      ) : (
        <UserCreateController
          isExpanded={isFormExpanded}
          setIsExpanded={setIsFormExpanded}
        />
      )}
    </div>
  );
};





