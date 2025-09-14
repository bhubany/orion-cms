import { Context } from "koa";

interface ApiKeyMap {
  [key: string]: string; // apiKey: projectSlug
}

const apiKeyMap: ApiKeyMap = {
  f840fdacef810b9d5c38f3aaffbcc80df7c1efad38f14445bf877d24ee3da5d966929b53508abe934df1a0e6be2d058a520fa6bc863df54e87c727e04e51f71847e1779a9f86eb5ab3100ed0d0da4ab567c2fdb4712e4411fe745e1b343d0a5b63c3f5d40942419133e6a878db85721a645f807de2f620b5a44a2243834aae87:
    "orion-web-1",
  "project-b-token": "project-b",
};

export default (config: any, { strapi }: { strapi: any }) => {
  return async (ctx: Context, next: () => Promise<any>) => {
    const authHeader = ctx.request.header.authorization;
    const apiKey = authHeader?.replace("Bearer ", "");
    const projectSlug = ctx.query.projectSlug || ctx.request.body.projectSlug;

    if (!apiKey || !projectSlug) {
      ctx.status = 401;
      ctx.body = { error: "API key and projectSlug are required" };
      return;
    }

    const allowedProject = apiKeyMap[apiKey];

    if (!allowedProject || allowedProject !== projectSlug) {
      ctx.status = 403;
      ctx.body = { error: "This API key cannot access this project" };
      return;
    }

    await next();
  };
};
