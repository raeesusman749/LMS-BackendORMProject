const userService = require("../../service/userService");
const userValidation = require("../user/userValidation");

module.exports = {
  getUsersController: async (_, res) => {
    try {
      const data = await userService.getUsers();
      res.send(data);
    } catch (error) {
      console.log("Can not acces users", error);
    }
  },

  createUserController: async (req, res) => {
    try {
      const { error, value } = userValidation.createUser.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const newUser = await userService.createUser(value);
        res.send(newUser);
      }
    } catch (error) {
      console.log(error);
    }
  },

  updateUserController: async (req, res) => {
    try {
      const { error, value } = userValidation.updateUser.validate(
        { id: req.params.id, ...req.body },
        {
          abortEarly: true,
        }
      );
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const userID = Number(req.params.id);
        const updatedUser = value;
        const data = await userService.updateUser(userID, updatedUser);
        res.send(data);
      }
    } catch (error) {
      console.log(error);
    }
  },

  deleteUserController: async (req, res) => {
    try {
      const { error, value } = userValidation.deleteUser.validate(
        { id: req.params.id },
        {
          abortEarly: true,
        }
      );
      if (error) {
        return res.send(error.details.map((err) => err.message));
      } else {
        const userID = Number(value.id);
        const data = await userService.deleteUser(userID);
        res.send(data);
      }
    } catch (error) { }
  },
};
