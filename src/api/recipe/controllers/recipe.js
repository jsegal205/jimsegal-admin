"use strict";

/**
 * recipe controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// https://youtu.be/OVV0CfgX6Qk
module.exports = createCoreController("api::recipe.recipe", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db
      .query("api::recipe.recipe")
      .findOne({ where: { slug } });

    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity);
  },
}));
