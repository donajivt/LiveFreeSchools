import { UserForm } from "./UserForm";
import { withReactive } from "@/reactive";

export const UserCreateController = withReactive(
  ({ data, services, onSubmit  }) => {

    
    const handleSubmit = (values) => {
      services.users.addUser(values);
      onSubmit()
    };

    return (
      <UserForm
        countries={data.countries}
        onSubmit={handleSubmit}
        initialValue={{}}
      />
    );
  },
  {
    queries: () => [
      {
        collection: "countries",
        name: "countries",
        defaultValue: []
      }
    ]
  }
);

