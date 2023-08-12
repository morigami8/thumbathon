import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ImageEventGateway } from './image.event.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([Image]),
    ClientsModule.register([
      {
        name: 'EVENT_BUS',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://127.0.01:5672'],
          queue: 'event_bus',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  providers: [ImageService, ImageEventGateway],
  controllers: [ImageController],
})
export class ImageModule {}

//Turn off auto acknowledge?
