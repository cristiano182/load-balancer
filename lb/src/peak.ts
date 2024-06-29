import * as grpc from "@grpc/grpc-js";
import { ListToDoRequest, ListToDoResponse } from './protos/todo_pb';
import State from "./state";
import proto from "./ToDoService";


export const listPEAK = (call: grpc.ServerUnaryCall<ListToDoRequest.AsObject, ListToDoResponse>, callback: grpc.sendUnaryData<ListToDoResponse>) => {
    const request = call.request
    if(State.getPool().length === 0) return callback(new Error(), null)

    let address = State.getSmallerLatencieServerAddress()

    if(!address) return callback(new Error(), null)
    
    const startTime = Date.now();

   State.countReceivedRequest(address);

    const client = new proto.ToDoService(address, grpc.credentials.createInsecure())

    client.listToDo(new ListToDoRequest(), (err: any, res: ListToDoResponse) => {
      if (err) {
        callback(err, null);
        return;
      }
    const elapsedTime = Date.now() - startTime;
    State.updatePEWMA(address, elapsedTime); 
    if (request.id  === 'end' ) console.log('TOTAL DE REQUEST RECEBIDAS EM CADA SERVER', State.countReceivedRequest())
    callback(null, new ListToDoResponse());
    });
}