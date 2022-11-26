const slugify = require("slugify");

module.exports = {
  /**
   * Triggered before user creation.
   */
  beforeCreate(event) {
    const { data } = event.params;

    if (data.title) {
      event.params.data.slug = slugify(data.title, {
        lower: true,
        strict: true,
      });
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;

    if (data.title) {
      event.params.data.slug = slugify(data.title, {
        lower: true,
        strict: true,
      });
    }
  },
};
