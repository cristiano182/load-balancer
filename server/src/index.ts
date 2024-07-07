require("dotenv").config();
import * as grpc from "@grpc/grpc-js";
import {
  HealthCheckResponse,
  ListToDoRequest,
  ListToDoResponse,
} from "./protos/todo_pb";
import algo from "js-sha256";
import wrapServerWithReflection from "grpc-node-server-reflection";
import proto from "./ToDoService";

const PORT = process.env.PORT;
const SERVER_NUMBER = process.env.SERVER_NUMBER;
const HASH_DIFFICULTY = process.env.HASH_DIFFICULTY as string;

const calculateHash = () => {
  let hash = "";
  while (!hash.startsWith(HASH_DIFFICULTY)) {
    hash = algo.sha256(Math.random().toString());
    if (hash.startsWith(HASH_DIFFICULTY)) console.log("Resolved hash: ", hash);
  }
  hash = "";
};

const healthCheck = (
  _call: grpc.ServerUnaryCall<void, HealthCheckResponse>,
  callback: grpc.sendUnaryData<HealthCheckResponse>,
) => {
  const response = new HealthCheckResponse().setLive(
    new HealthCheckResponse.HealthCheck()
      .setCpu(90)
      .setDb(true)
      .setMemory(80)
      .setPaymentgateway(true)
      .setRabbitmq(true),
  );
  callback(null, response);
};

const listToDo = (
  _call: grpc.ServerUnaryCall<ListToDoRequest, ListToDoResponse>,
  callback: grpc.sendUnaryData<ListToDoResponse>,
) => {
  const response = new ListToDoResponse();
  calculateHash();
  callback(null, response);
};

function main() {
  const server = wrapServerWithReflection(new grpc.Server());

  server.addService(proto.ToDoService.service, { listToDo });
  server.addService(proto.HealthCheckService.service, { healthCheck });

  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err: any, port: Number) => {
      if (err) throw err;
      console.log(`SERVER NUMBER ${SERVER_NUMBER} is running on port ${port}`);
      server.start();
    },
  );
}
main();
