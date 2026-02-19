function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function RandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomError(successes, total) {
  if (Math.random() < successes / total) {
    const error = new Error("Unauthorized");
    error.status = 401;
    throw error;
  };
}


const usersTable = [
  {
    id: 1,
    name: "John Doe",
    countryId: 1,
    position: "Developer",
    description: "Desktop Developer",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Eliza",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Doe",
    countryId: 2,
    position: "Designer",
    description: "Web Designer",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Valentina",
    email: "jane.doe@example.com",
    phone: "123-456-7890",
  },
  {
    id: 3,
    name: "Alice Smith",
    countryId: 3,
    position: "Manager",
    description: "Project Manager",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Alicia",
    email: "alice.smith@example.com",
    phone: "123-456-7890",
  },
];

const BASE_URL = "https://localhost:7024";


export const userClient = {
  getUsers: async () => {
    const response = await fetch(`${BASE_URL}/useritems`);
    if (!response.ok) throw new Error("Error al obtener usuarios");

    return await response.json();
  },

  addUser: async (user) => {
    const response = await fetch(`${BASE_URL}/useritems`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    return await response.json();
  },

  getUserById: async (id) => {
    const response = await fetch(`${BASE_URL}/useritems/${id}`);
    if (!response.ok) return undefined;

    return await response.json();
  },

  updateUser: async (user) => {

    const response = await fetch(`${BASE_URL}/useritems/${user.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    if (!response.ok) throw new Error("Error al actualizar");
    return user;
  },

  deleteUser: async (id) => {
    const response = await fetch(`${BASE_URL}/useritems/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error("Error al eliminar");
  },
};