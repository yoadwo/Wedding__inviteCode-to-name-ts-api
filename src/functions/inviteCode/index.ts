import { handlerPath } from '@libs/handler-resolver';

// using cors middleware in middy,
// so no need to declare cors
export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'invite_code/{code}',
      }
    },
  ],
};
