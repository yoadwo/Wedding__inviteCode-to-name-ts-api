import middy from "@middy/core";
import cors from '@middy/http-cors';
import middyJsonBodyParser from "@middy/http-json-body-parser";

// called in invokation
// process.env works
export const middyfy = (handler) => {
  return middy(handler).
  use(middyJsonBodyParser()).
  use(cors({origins:process.env.CORS_ORIGINS.replace(/\s+/g, '').split(",")}))
}