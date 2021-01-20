"use strict";

const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const columns = ["name", "url", "image_url", "bgg_id"];

const find = async (ctx) => {
  const result = await strapi.query("game").model.fetchAll({ columns });

  ctx.send(result);
};

// const findOne = async (ctx) => {
//   const { id } = ctx.params;

//   const result = await strapi
//     .query("game")
//     .model.where({ id })
//     .fetch({ columns });

//   ctx.send(result);
// };

module.exports = {
  find,
  // findOne,
};
