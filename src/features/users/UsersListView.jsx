import { Breadcrumb } from "antd";
import {UsersListController} from "./UsersListController"
export const UsersListView = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          { title: <a>Home</a> },
          { title: 'Users' },
        ]}
        style={{ marginBottom: 16 }}
      />
      <UsersListController onClick={(user) => console.log(user)} />
    </div>
  );
};
