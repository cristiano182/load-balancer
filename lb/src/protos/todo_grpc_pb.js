// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var todo_pb = require('./todo_pb.js');

function serialize_Empty(arg) {
  if (!(arg instanceof todo_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return todo_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HealthCheckResponse(arg) {
  if (!(arg instanceof todo_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type HealthCheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HealthCheckResponse(buffer_arg) {
  return todo_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListToDoRequest(arg) {
  if (!(arg instanceof todo_pb.ListToDoRequest)) {
    throw new Error('Expected argument of type ListToDoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListToDoRequest(buffer_arg) {
  return todo_pb.ListToDoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListToDoResponse(arg) {
  if (!(arg instanceof todo_pb.ListToDoResponse)) {
    throw new Error('Expected argument of type ListToDoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListToDoResponse(buffer_arg) {
  return todo_pb.ListToDoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ToDoServiceService = exports.ToDoServiceService = {
  listToDo: {
    path: '/ToDoService/ListToDo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.ListToDoRequest,
    responseType: todo_pb.ListToDoResponse,
    requestSerialize: serialize_ListToDoRequest,
    requestDeserialize: deserialize_ListToDoRequest,
    responseSerialize: serialize_ListToDoResponse,
    responseDeserialize: deserialize_ListToDoResponse,
  },
};

exports.ToDoServiceClient = grpc.makeGenericClientConstructor(ToDoServiceService);
var HealthCheckServiceService = exports.HealthCheckServiceService = {
  healthCheck: {
    path: '/HealthCheckService/HealthCheck',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.Empty,
    responseType: todo_pb.HealthCheckResponse,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_HealthCheckResponse,
    responseDeserialize: deserialize_HealthCheckResponse,
  },
};

exports.HealthCheckServiceClient = grpc.makeGenericClientConstructor(HealthCheckServiceService);
