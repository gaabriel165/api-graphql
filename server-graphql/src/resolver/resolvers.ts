import {
  getUsers,
  newUser,
  updateUserById,
  deleteUserById,
} from "../repository/User";

export const resolvers = {
  Query: {
    getUser: async () => {
      const users = await getUsers();

      const usersParsed = users.map((e) => {
        const createdAt = String(e.createdAt).split(" ");

        const dto = {
          id: e.id,
          name: e.name,
          type: e.type,
          createdAt: String(
            createdAt[1] + " " + createdAt[2] + " " + createdAt[3]
          ),
          updatedAt: e.updatedAt,
        };
        return dto;
      });

      return usersParsed;
    },
  },
  Mutation: {
    newUser: async (_: any, { name, type }: { name: string; type: string }) => {
      const user = {
        name: name,
        type: type,
      };

      return newUser(user);
    },
    updateUserById: async (
      _: any,
      { id, name, type }: { id: number; name: string; type: string }
    ) => {
      const result = await updateUserById(id, name, type);

      if (result.affected) {
        return true;
      } else {
        return false;
      }
    },
    deleteUserById: async (_: any, { id }: { id: number }) => {
      const result = await deleteUserById(id);
      
      if (result.affected) {
        return true;
      } else {
        return false;
      }
    },
  },
};
