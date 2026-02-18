import { useState } from "react";
import { withReactive } from "@/reactive";
import { UserList } from "./UserList";
import { UserForm } from "./UserForm";
import { UsersLoader } from "./UsersLoader";

export const UsersListController = withReactive(
  ({ data, services, monitors, onClick }) => {

    const [user, setUser] = useState(null);
    const [isFormExpanded, setIsFormExpanded] = useState(false);


    const handleOnEdit = (user) => {
      setUser(user);
      setIsFormExpanded(true);
    }

    const handleOnDelete = (id) => {
      services.users.deleteUser(id);
      services.users.getUsers();
    }

    const handleSubmit = (userValues) => {
      setIsFormExpanded(false);

      if (userValues.id) {
        services.users.updateUser(userValues);
      } else {
        services.users.addUser(userValues);
      }
      setUser(null);
    }

    const isLoading = monitors.getUsers || monitors.addUser || monitors.getCountries || monitors.getUserById || monitors.updateUser

    return (
      <div>
        <UserForm
          countries={data.countries}
          onSubmit={(user) => { handleSubmit(user) }}
          initialValue={user}
          isExpanded={isFormExpanded}
          setIsExpanded={setIsFormExpanded}
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
    monitors: () => ["getUsers", "addUser", "getCountries", "getUserById", "updateUser", "deleteUser"],
  },
);
