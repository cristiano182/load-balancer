// package: 
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as todo_pb from "./todo_pb";

interface IToDoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listToDo: IToDoServiceService_IListToDo;
}

interface IToDoServiceService_IListToDo extends grpc.MethodDefinition<todo_pb.ListToDoRequest, todo_pb.ListToDoResponse> {
    path: "/ToDoService/ListToDo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_pb.ListToDoRequest>;
    requestDeserialize: grpc.deserialize<todo_pb.ListToDoRequest>;
    responseSerialize: grpc.serialize<todo_pb.ListToDoResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.ListToDoResponse>;
}

export const ToDoServiceService: IToDoServiceService;

export interface IToDoServiceServer extends grpc.UntypedServiceImplementation {
    listToDo: grpc.handleUnaryCall<todo_pb.ListToDoRequest, todo_pb.ListToDoResponse>;
}

export interface IToDoServiceClient {
    listToDo(request: todo_pb.ListToDoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.ListToDoResponse) => void): grpc.ClientUnaryCall;
    listToDo(request: todo_pb.ListToDoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.ListToDoResponse) => void): grpc.ClientUnaryCall;
    listToDo(request: todo_pb.ListToDoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.ListToDoResponse) => void): grpc.ClientUnaryCall;
}

export class ToDoServiceClient extends grpc.Client implements IToDoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listToDo(request: todo_pb.ListToDoRequest, callback: (error: grpc.ServiceError | null, response: todo_pb.ListToDoResponse) => void): grpc.ClientUnaryCall;
    public listToDo(request: todo_pb.ListToDoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.ListToDoResponse) => void): grpc.ClientUnaryCall;
    public listToDo(request: todo_pb.ListToDoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.ListToDoResponse) => void): grpc.ClientUnaryCall;
}

interface IHealthCheckServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    healthCheck: IHealthCheckServiceService_IHealthCheck;
}

interface IHealthCheckServiceService_IHealthCheck extends grpc.MethodDefinition<todo_pb.Empty, todo_pb.HealthCheckResponse> {
    path: "/HealthCheckService/HealthCheck";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<todo_pb.Empty>;
    requestDeserialize: grpc.deserialize<todo_pb.Empty>;
    responseSerialize: grpc.serialize<todo_pb.HealthCheckResponse>;
    responseDeserialize: grpc.deserialize<todo_pb.HealthCheckResponse>;
}

export const HealthCheckServiceService: IHealthCheckServiceService;

export interface IHealthCheckServiceServer extends grpc.UntypedServiceImplementation {
    healthCheck: grpc.handleUnaryCall<todo_pb.Empty, todo_pb.HealthCheckResponse>;
}

export interface IHealthCheckServiceClient {
    healthCheck(request: todo_pb.Empty, callback: (error: grpc.ServiceError | null, response: todo_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    healthCheck(request: todo_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    healthCheck(request: todo_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
}

export class HealthCheckServiceClient extends grpc.Client implements IHealthCheckServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public healthCheck(request: todo_pb.Empty, callback: (error: grpc.ServiceError | null, response: todo_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public healthCheck(request: todo_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: todo_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
    public healthCheck(request: todo_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: todo_pb.HealthCheckResponse) => void): grpc.ClientUnaryCall;
}
