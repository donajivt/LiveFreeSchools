import { useState } from "react";
import { withReactive } from "@/reactive";
import { UserList } from "./UserList";
import { UserForm } from "./UserForm";
import { UsersLoader } from "./UsersLoader";

export const UsersListController = withReactive(
  ({ data, services, monitors, onClick }) => {

    const [user, setUser] = useState(null);

    const handleOnEdit = async (user) => {
      console.log("editando user", user);
      const dbUser = await services.users.getUserById(user.id)
      console.log("dbUser", dbUser);
      setUser(dbUser);
    }

    const handleOnDelete = (id) => {
      services.users.deleteUser(id);
      services.users.getUsers();
    }

    const isLoading = monitors.getUsers || monitors.addUser || monitors.getCountries || monitors.getUserById || monitors.updateUser

    return (
      <div>
        <UserForm
          countries={data.countries}
          onAdd={(user) => services.users.addUser(user)}
          onEdit={(user) => services.users.updateUser(user)}
          initialValue={user}
        />
        <UsersLoader onClick={services.users.getUsers} isLoading={isLoading}>
          {({ filteredUsers }) => {
            return (
              <UserList
                users={filteredUsers}
                countries={data.countries}
                onClick={onClick}
                onDelete={(id) => handleOnDelete(id)}
                onEdit={(user) => handleOnEdit(user)}
              />
            );
          }}
        </UsersLoader>
      </div>
    );
  },
  {
    init: ({ services }) => {
      services.countries.getCountries();
      services.users.getUsers();
    },
    queries: () => [
      {
        collection: "countries",
        name: "countries",
        defaultValue: [],
      },
      {
        collection: "users",
        name: "users",
        defaultValue: [],
      },
    ],
    monitors: () => ["getUsers", "addUser", "getCountries", "getUserById", "updateUser", "deleteUser" ],
  },
);
