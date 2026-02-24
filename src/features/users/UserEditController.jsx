import { Spin } from 'antd';
import { UserForm } from "./UserForm";
import { withReactive } from "@/reactive";


export const UserEditController = withReactive(
  ({ data, services, monitors, onSubmit }) => {

    const handleSubmit = (values) => {
      services.users.updateUser(values);
      onSubmit()
    };

    if (monitors.getUserById) return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Spin size="large" />
      </div>
    );


    const _user = data.user?.[0] || {}

    return (
      <div>
        <UserForm
          countries={data.countries}
          onSubmit={handleSubmit}
          initialValue={_user}
        />
      </div>

    );
  },
  {
    init: ({ services, userId }) => {
      userId && services.users.getUserById(userId);
    },
    queries: ({ userId }) => [
      {
        collection: "countries",
        name: "countries",
        defaultValue: []
      },
      {
        collection: "users",
        name: "user",
        where: {
          op: "==",
          field: "id",
          value: userId
        },
        defaultValue: []
      }
    ],
    monitors: () => ["getUserById"]
  }
);

