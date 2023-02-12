import { StackContext, Api, Cron } from "sst/constructs";

// export function API({ stack }: StackContext) {
//   const api = new Api(stack, "api", {
//     routes: {
//       "GET /": "packages/functions/src/lambda.handler",
//       "POST /": "packages/functions/src/lambda.postHandler",
//     },
//   });

//   stack.addOutputs({
//     ApiEndpoint: api.url,
//   });
// }

export function Job({ stack }: StackContext) {
  new Cron(stack, "Cron", {
    schedule: "rate(5 minutes)",
    job: "packages/functions/src/lambda.main",
  });
}
