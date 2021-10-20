"use strict";

const { sanitizeEntity } = require("strapi-utils");

const find = async () => {
  const entities = await strapi.services.game.find({
    _sort: "name:asc",
  });
  return sanitizeEntity(entities, { model: strapi.models.game });
};

module.exports = {
  find,
};
