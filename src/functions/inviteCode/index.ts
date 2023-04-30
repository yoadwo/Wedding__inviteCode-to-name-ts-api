import { handlerPath } from '@libs/handler-resolver';

// 1. this must be used in addition with middy plugin
// 2. when running locally, use deploy with --param flag to overwrite
export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'invite_code/{code}',
        cors: {
          origin: '${param:CORS_ORIGINS}'
        },
        private: true
      }
    },
  ],
};
