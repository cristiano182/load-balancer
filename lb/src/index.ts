require('dotenv').config()
import * as grpc from "@grpc/grpc-js";
import { UntypedHandleCall } from "@grpc/grpc-js";
import wrapServerWithReflection from 'grpc-node-server-reflection';
import { listLC } from "./lc";
import { listPEAK } from "./peak";
import { HealthCheckResponse } from "./protos/todo_pb";
import { listRR } from "./rr"
import State from "./state";
import proto from "./ToDoService";

export enum LB_ALGO_TYPE_ENUM {
    RR = 'RR',
    LC = 'LC',
    PEAK = 'PEAK',
}

const PORT = process.env.PORT
const LB_ALGORITHM_TYPE = process.env.LB_ALGORITHM_TYPE

const checkGrpcHealth = () => {
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
    }, 1000)
}

function main() {
    let listToDo: UntypedHandleCall;
    switch(LB_ALGORITHM_TYPE) {
        case LB_ALGO_TYPE_ENUM.RR:
            listToDo = listRR
        case LB_ALGO_TYPE_ENUM.LC:
            listToDo = listLC
        case LB_ALGO_TYPE_ENUM.PEAK:
            listToDo = listPEAK
        default:
            listToDo = listRR
    } 
    checkGrpcHealth()
    const server = wrapServerWithReflection(new grpc.Server())
    server.addService(proto.ToDoService.service, { listToDo })
    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err: any, port: Number) => {
        if (err) throw err
        console.log(`LB TYPE ${LB_ALGORITHM_TYPE} is running on port ${port}`)
        server.start();
    })
}
main()


