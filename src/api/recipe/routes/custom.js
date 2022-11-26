module.exports = {
  routes: [
    {
      method: "GET",
      path: "/recipes/:slug",
      handler: "recipe.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
