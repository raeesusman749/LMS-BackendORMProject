const { models } = require("../models");

module.exports = {
  getUsers: async () => {
    const users = await models.user.findAll() ;
    return users;
  },

  createUser: async (data) => {
    try {
      const user = await models.user.create(data);
      console.log(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async (userID, updatedUser) => {
    try {
      const user = await models.user.findByPk(userID);
      if (user) {
        user.update(updatedUser);
        return user;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async (userID) => {
    try {
      const user = await models.user.findByPk(userID);
      if (user) {
        user.destroy();
        return "User deleted";
      }
    } catch (error) {
      console.log(error);
    }
  },
};
