/**
 * blog router
 */
import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::blog.blog", {
  config: {
    find: {
      policies: ["global::project-scope"], // attach policy
    },
    findOne: {
      policies: ["global::project-scope"],
    },
  },
});
