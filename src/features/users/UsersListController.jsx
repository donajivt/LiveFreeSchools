import { withReactive } from "@/reactive";
import { UserList } from "./UserList";
import { UsersLoader } from "./UsersLoader";

export const UsersListController = withReactive(
  ({ data, services, monitors, onClick }) => {

    const isLoading = monitors.getUsers.isLoading || monitors.getCountries.isLoading || monitors.deleteUser.isLoading

    return (
      <div>
        <UsersLoader onClick={services.users.getUsers} isLoading={isLoading}>
          {({ filteredUsers }) => {
            return (
              <UserList
                users={filteredUsers}
                countries={data.countries}
                onClick={onClick}
                onDelete={(id) => services.users.deleteUser(id)}
                onEdit={(user) => onClick(user)}
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
    monitors: () => ["getUsers", "getCountries", "deleteUser"],
  },
);
