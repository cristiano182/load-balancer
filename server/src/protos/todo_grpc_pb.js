// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var todo_pb = require('./todo_pb.js');

function serialize_todo_Empty(arg) {
  if (!(arg instanceof todo_pb.Empty)) {
    throw new Error('Expected argument of type todo.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_Empty(buffer_arg) {
  return todo_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_HealthCheckResponse(arg) {
  if (!(arg instanceof todo_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type todo.HealthCheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_HealthCheckResponse(buffer_arg) {
  return todo_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ListToDoRequest(arg) {
  if (!(arg instanceof todo_pb.ListToDoRequest)) {
    throw new Error('Expected argument of type todo.ListToDoRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ListToDoRequest(buffer_arg) {
  return todo_pb.ListToDoRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_todo_ListToDoResponse(arg) {
  if (!(arg instanceof todo_pb.ListToDoResponse)) {
    throw new Error('Expected argument of type todo.ListToDoResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_todo_ListToDoResponse(buffer_arg) {
  return todo_pb.ListToDoResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ToDoServiceService = exports.ToDoServiceService = {
  listToDo: {
    path: '/todo.ToDoService/ListToDo',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.ListToDoRequest,
    responseType: todo_pb.ListToDoResponse,
    requestSerialize: serialize_todo_ListToDoRequest,
    requestDeserialize: deserialize_todo_ListToDoRequest,
    responseSerialize: serialize_todo_ListToDoResponse,
    responseDeserialize: deserialize_todo_ListToDoResponse,
  },
};

exports.ToDoServiceClient = grpc.makeGenericClientConstructor(ToDoServiceService);
var HealthCheckServiceService = exports.HealthCheckServiceService = {
  healthCheck: {
    path: '/todo.HealthCheckService/HealthCheck',
    requestStream: false,
    responseStream: false,
    requestType: todo_pb.Empty,
    responseType: todo_pb.HealthCheckResponse,
    requestSerialize: serialize_todo_Empty,
    requestDeserialize: deserialize_todo_Empty,
    responseSerialize: serialize_todo_HealthCheckResponse,
    responseDeserialize: deserialize_todo_HealthCheckResponse,
  },
};

exports.HealthCheckServiceClient = grpc.makeGenericClientConstructor(HealthCheckServiceService);
