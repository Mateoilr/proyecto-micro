import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TimeService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 3001,
      },
    });
  }

  public getTime() {
    return this.client.send<string, string>('get_time', '');
  }
}