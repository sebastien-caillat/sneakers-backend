module.exports = {
    async me(ctx) {
      if (!ctx.state.user) {
        return ctx.badRequest(null, [{ messages: [{ id: 'No authorization header was found' }] }]);
      }
  
      const data = await strapi.plugins['users-permissions'].services.user.fetch({
        id: ctx.state.user.id,
      });
  
      if (!data) {
        return ctx.notFound();
      }
  
      ctx.body = data;
    },
  
    async find(ctx) {
      const users = await strapi.plugins['users-permissions'].services.user.fetchAll(ctx.query);
      return users;
    },
  };