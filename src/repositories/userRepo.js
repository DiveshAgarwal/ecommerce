/**
 * @module User
 * @type repository
 * @description DB operations related to users
 * @author Divesh Agarwal
 */
const Models = require("../models");

const UserRepo = {
  /**
   * @param {object} user data of the user
   * @description creates a new user if not found
   * @returns user details
   */
  async createUser(user) {
    return Models.user.create(user);
  },

  /**
   * @param {number} userId of the user
   * @description finds user by primary key
   * @returns details of the user if found.
   */
  async findByUserId(userId) {
    return Models.user.findByPk(userId);
  },

  /**
   * @param {string} email email address of the user
   * @description finds user by email address
   * @returns details of the user if found.
   */
  async findByEmailId(email) {
    return Models.user.findOne({
      where: {
        email,
      },
    });
  },

  /**
   * @param {object} condition to get the user
   * @description finds user based on the condition
   * @returns details of the user if found.
   */
  async findWhere(condition) {
    return Models.user.findAll({
      attributes: ["userId", "name"],
      where: {
        ...condition,
      },
    });
  },
};

module.exports = UserRepo;
