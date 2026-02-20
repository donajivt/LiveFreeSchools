import  api  from "./api"

export const userClient = {
  getUsers: async () => {
    const { data } = await api.get(`/useritems`);
    return data;
  },

  addUser: async (user) => {
    const { data } = await api.post(`/useritems`, { ...user });
    return data;
  },

  getUserById: async (id) => {
    const { data } = await api.get(`/useritems/${id}`);
    return data;
  },

  updateUser: async (user) => {
    const { data } = await api.put(`/useritems/${user.id}`, { ...user });
    return user;
  },

  deleteUser: async (id) => {
    const { data } = await api.delete(`/useritems/${id}`);
    return data;
  },
};