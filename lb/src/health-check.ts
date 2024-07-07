import * as grpc from "@grpc/grpc-js";
import { HealthCheckResponse } from "./protos/todo_pb";
import proto from "./ToDoService";
import State from "./state";

const HEALTH_CHECK_DELAY = 1000

export const checkGrpcHealth = () => {
    setInterval(() => {
        State.getServers().forEach(server => {
        const client = new proto.HealthCheckService(server, grpc.credentials.createInsecure())
        client.healthCheck({}, (err: any, _res: HealthCheckResponse) => {
        if (err) {
        State.removePool(server)
        return
        } 
        State.includesPool(server)
        });
        })
      console.log('Connected pool:', State.getPool())
    }, HEALTH_CHECK_DELAY)
}