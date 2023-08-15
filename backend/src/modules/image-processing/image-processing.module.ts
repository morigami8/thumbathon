import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ImageEventGateway } from './image.event.gateway';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EVENT_BUS',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://127.0.0.1:5672'],
          queue: 'event_bus',
          //noAck: false,
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [ImageEventGateway],
})
export class ImageProcessingModule {}
