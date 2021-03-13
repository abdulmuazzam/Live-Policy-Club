"use strict";

const { sanitizeEntity } = require("strapi-utils");
const _ = require("lodash");
const bcrypt = require("bcryptjs");

const sanitizeUser = (user) =>
  sanitizeEntity(user, {
    model: strapi.query("user", "users-permissions").model,
  });

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {


  async find(ctx, next, { populate } = {}) {
    let users;

    if (_.has(ctx.query, '_q')) {
      // use core strapi query to search for users
      users = await strapi.query('user', 'users-permissions').search(ctx.query, populate);
    } else {
      users = await strapi.plugins['users-permissions'].services.user.fetchAll(ctx.query, populate);
    }

    ctx.body = users.map(sanitizeUser);
  },

  async getUsers(ctx){

    const data = await strapi.plugins['users-permissions'].services.user.fetchAll()
    ctx.send(sanitizeUser(data));
  },


  async changeName(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }

    if (
      !_.has(ctx.request.body, "firstName") &&
      !_.has(ctx.request.body, "lastName")
    ) {
      return ctx.badRequest("Invalid data");
    }

    let updateData = {
      firstName: ctx.request.body.firstName,
      lastName: ctx.request.body.lastName,
    };
    
    const data = await strapi.plugins["users-permissions"].services.user.edit(
      { id: user.id },
      updateData
    );

    ctx.send(sanitizeUser(data));
  },
  async changePassword(ctx) {
    const user = ctx.state.user;

    if (!user) {
      return ctx.badRequest(null, [
        { messages: [{ id: "No authorization header was found" }] },
      ]);
    }

    if (
      !_.has(ctx.request.body, "oldPassword") &&
      !_.has(ctx.request.body, "newPassword") &&
      !_.has(ctx.request.body, "confirmPassword")
    ) {
      return ctx.badRequest("Invalid data");
    }

    const match = await bcrypt.compare(
      ctx.request.body.oldPassword,
      user.password
    );

    if (!match) {
      return ctx.badRequest("Invalid password");
    }

    if (ctx.request.body.newPassword !== ctx.request.body.confirmPassword) {
      return ctx.badRequest(
        "The new password does not match with the confirm password"
      );
    }

    if (ctx.request.body.oldPassword === ctx.request.body.newPassword) {
      return ctx.badRequest("New password cannot be same as old password");
    }

    let updateData = {
      password: ctx.request.body.newPassword,
    };

    const data = await strapi.plugins["users-permissions"].services.user.edit(
      { id: user.id },
      updateData
    );

    ctx.send(sanitizeUser(data));
  },
};
