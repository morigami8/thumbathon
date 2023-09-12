import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ImageEventGateway } from './image.event.gateway';
import { RABBITMQ_URL } from '../../constants';
import { ImageProcessingService } from './image-processing.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'EVENT_BUS',
        transport: Transport.RMQ,
        options: {
          urls: [RABBITMQ_URL],
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
  providers: [ImageProcessingService],
})
export class ImageProcessingModule {}
