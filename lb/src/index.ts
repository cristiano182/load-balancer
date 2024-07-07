require("dotenv").config();
import * as grpc from "@grpc/grpc-js";
import { UntypedHandleCall } from "@grpc/grpc-js";
import wrapServerWithReflection from "grpc-node-server-reflection";
import { checkGrpcHealth } from "./health-check";
import { listLC } from "./lc";
import { listPEAK } from "./peak";
import { listRR } from "./rr";
import proto from "./ToDoService";

const PORT = process.env.PORT;
const LB_ALGORITHM_TYPE = process.env.LB_ALGORITHM_TYPE;

export enum LB_ALGO_TYPE_ENUM {
  RR = "RR",
  LC = "LC",
  PEAK = "PEAK",
}

function selectLbType() {
  if (LB_ALGORITHM_TYPE === LB_ALGO_TYPE_ENUM.RR) return listRR;
  if (LB_ALGORITHM_TYPE === LB_ALGO_TYPE_ENUM.LC) return listLC;
  if (LB_ALGORITHM_TYPE === LB_ALGO_TYPE_ENUM.PEAK) return listPEAK;
}

function main() {
  let listToDo = selectLbType() as UntypedHandleCall;

  checkGrpcHealth();

  const server = wrapServerWithReflection(new grpc.Server());

  server.addService(proto.ToDoService.service, { listToDo });

  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err: any, port: Number) => {
      if (err) throw err;
      console.log(`LB TYPE ${LB_ALGORITHM_TYPE} is running on port ${port}`);
      server.start();
    },
  );
}
main();
