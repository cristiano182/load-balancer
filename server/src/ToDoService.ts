import * as protoLoader from '@grpc/proto-loader';
import * as grpc from "@grpc/grpc-js";
const PROTO_PATH = __dirname + '/protos/todo.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }) as any

export default grpc.loadPackageDefinition(packageDefinition).todo as unknown as any;


