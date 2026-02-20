import { UserForm } from "./UserForm";
import { withReactive } from "@/reactive";

const UserEditController = withReactive(
  ({ data, services, isExpanded, setIsExpanded }) => {

    const handleSubmit = (values) => {
      services.users.updateUser(values);
      setIsExpanded(false);
    };

    const _user = data.user?.[0] || {}

    return (
      <UserForm
        countries={data.countries}
        onSubmit={handleSubmit}
        initialValue={_user}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
    );
  },
  {
    init: ({ services, userId }) => {
      userId && services.users.getUserById(userId);
    },
    queries: ({userId}) => [
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

export default UserEditController;