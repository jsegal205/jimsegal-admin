const { sanitizeEntity } = require("strapi-utils");

const find = async () => {
  const entities = await strapi.services.destination.find({
    _sort: "city:asc",
  });
  return sanitizeEntity(entities, { model: strapi.models.destination });
};

module.exports = {
  find,
};
