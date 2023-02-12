import { ApiHandler } from "sst/node/api";
import { getDataFromInvenio } from "@sst-prom/core/data";
import { APIGatewayProxyEventV2, Context } from "aws-lambda";

export async function main() {
  return {
    message: "Working fine",
  };
}

export const handler = ApiHandler(
  async (_evt: APIGatewayProxyEventV2, ctx: Context) => {
    const data = await getDataFromInvenio();

    return {
      body: JSON.stringify(data),
      context: ctx,
      event: _evt,
    };
  }
);

export const postHandler = ApiHandler(
  async (_evt: APIGatewayProxyEventV2, ctx: Context) => {
    return {
      body: `Hello world. The time is now  `,
      context: ctx,
      event: _evt,
    };
  }
);
