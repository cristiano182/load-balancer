interface IGRPC_SERVERS {
    address: string;
    requestReceive: number;
  }
  
  const delay_time = 1 * 1000;
  
  export default class State {
    static GRPC_SERVERS = process.env.GRPC_SERVERS?.split(";")
      .filter(Boolean)
      .map((address) => ({
        address,
        requestReceive: 0,
      })) as unknown as IGRPC_SERVERS[];
    static POOL: string[] = [];
    static connectionCounts = this.GRPC_SERVERS.map(
      (server) => server.address,
    ).reduce((acc, address) => {
      acc[address] = 0;
      return acc;
    }, {} as any);
    static latencies = this.GRPC_SERVERS.map((server) => server.address).reduce(
      (acc, address) => {
        acc[address] = {
          ewma: 0,
          lastRequestTime: Date.now(),
        };
        return acc;
      },
      {} as any,
    );
    static getServers() {
      return this.GRPC_SERVERS.map((server) => server.address);
    }
  
    static getPool() {
      return this.POOL;
    }
  
    static getAddressByIndex(index: number) {
      return this.POOL[index];
    }
  
    static removePool(serverDown: string) {
      this.POOL = this.POOL.filter((server) => server !== serverDown);
      delete this.connectionCounts[serverDown];
    }
    static includesPool(serverUp: string) {
      this.POOL = [...new Set([...this.POOL, serverUp])];
      if (!Object.keys(this.connectionCounts).some((key) => key === serverUp)) {
        this.connectionCounts[serverUp] = 0;
      }
    }
  
    static countReceivedRequest(address?: string) {
      if (!address) return this.GRPC_SERVERS;
      this.GRPC_SERVERS = this.GRPC_SERVERS.map((server) => {
        if (server.address === address)
          return {
            ...server,
            requestReceive: server.requestReceive + 1,
          };
        return server;
      });
    }
  
    static getLeastConnectionsServerAddress() {
      let minConnections = Infinity;
      let chosenAddress = null as any;
      for (const address in this.connectionCounts) {
        if (this.connectionCounts[address] < minConnections) {
          minConnections = this.connectionCounts[address];
          chosenAddress = address;
        }
      }
      this.connectionCounts[chosenAddress] = +1;
      return chosenAddress as string;
    }
  
    static getSmallerLatencieServerAddress() {
      let smallerLatencieAddress = null;
      let smallerEWMA = Infinity;
      for (const address in this.latencies) {
        const ewma = this.latencies[address].ewma;
        if (ewma < smallerEWMA) {
          smallerEWMA = ewma;
          smallerLatencieAddress = address;
        }
      }
      return smallerLatencieAddress as string;
    }
  
    static updatePEWMA(address: string, elapsedTime: number) {
      const server = this.latencies[address];
      const alpha = 1 - Math.exp(-elapsedTime / delay_time);
      this.latencies[address].ewma =
        alpha * elapsedTime + (1 - alpha) * server.ewma;
    }
  }
  