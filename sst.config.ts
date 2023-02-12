import { SSTConfig } from "sst";
import { Job, API } from "./stacks";

export default {
  config(_input) {
    return {
      name: "sst-prom",
      region: "us-west-1",
    };
  },
  stacks(app) {
    app.stack(API);
    app.stack(Job);
  },
} satisfies SSTConfig;
