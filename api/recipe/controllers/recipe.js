const { sanitizeEntity } = require("strapi-utils");

const find = async () => {
  const entities = await strapi.services.recipe.find({ _sort: "title:asc" });
  return sanitizeEntity(entities, { model: strapi.models.recipe });
};

const findOne = async (ctx) => {
  const { slug } = ctx.params;

  const entity = await strapi.services.recipe.findOne({ slug });
  return sanitizeEntity(entity, { model: strapi.models.recipe });
};

module.exports = {
  find,
  findOne,
};
