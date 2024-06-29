// package: 
// file: todo.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class HealthCheckResponse extends jspb.Message { 

    hasLive(): boolean;
    clearLive(): void;
    getLive(): HealthCheckResponse.HealthCheck | undefined;
    setLive(value?: HealthCheckResponse.HealthCheck): HealthCheckResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthCheckResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HealthCheckResponse): HealthCheckResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthCheckResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthCheckResponse;
    static deserializeBinaryFromReader(message: HealthCheckResponse, reader: jspb.BinaryReader): HealthCheckResponse;
}

export namespace HealthCheckResponse {
    export type AsObject = {
        live?: HealthCheckResponse.HealthCheck.AsObject,
    }


    export class HealthCheck extends jspb.Message { 
        getDb(): boolean;
        setDb(value: boolean): HealthCheck;
        getRabbitmq(): boolean;
        setRabbitmq(value: boolean): HealthCheck;
        getPaymentgateway(): boolean;
        setPaymentgateway(value: boolean): HealthCheck;
        getMemory(): number;
        setMemory(value: number): HealthCheck;
        getCpu(): number;
        setCpu(value: number): HealthCheck;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HealthCheck.AsObject;
        static toObject(includeInstance: boolean, msg: HealthCheck): HealthCheck.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HealthCheck, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HealthCheck;
        static deserializeBinaryFromReader(message: HealthCheck, reader: jspb.BinaryReader): HealthCheck;
    }

    export namespace HealthCheck {
        export type AsObject = {
            db: boolean,
            rabbitmq: boolean,
            paymentgateway: boolean,
            memory: number,
            cpu: number,
        }
    }

}

export class ToDo extends jspb.Message { 
    getId(): string;
    setId(value: string): ToDo;
    getDescription(): string;
    setDescription(value: string): ToDo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ToDo.AsObject;
    static toObject(includeInstance: boolean, msg: ToDo): ToDo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ToDo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ToDo;
    static deserializeBinaryFromReader(message: ToDo, reader: jspb.BinaryReader): ToDo;
}

export namespace ToDo {
    export type AsObject = {
        id: string,
        description: string,
    }
}

export class ListToDoRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): ListToDoRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListToDoRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListToDoRequest): ListToDoRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListToDoRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListToDoRequest;
    static deserializeBinaryFromReader(message: ListToDoRequest, reader: jspb.BinaryReader): ListToDoRequest;
}

export namespace ListToDoRequest {
    export type AsObject = {
        id: string,
    }
}

export class ListToDoResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<ToDo>;
    setDataList(value: Array<ToDo>): ListToDoResponse;
    addData(value?: ToDo, index?: number): ToDo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListToDoResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ListToDoResponse): ListToDoResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListToDoResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListToDoResponse;
    static deserializeBinaryFromReader(message: ListToDoResponse, reader: jspb.BinaryReader): ListToDoResponse;
}

export namespace ListToDoResponse {
    export type AsObject = {
        dataList: Array<ToDo.AsObject>,
    }
}
