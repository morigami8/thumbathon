import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RABBITMQ_URL } from '../../constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([Image]),
    ClientsModule.register([
      {
        name: 'EVENT_BUS',
        transport: Transport.RMQ,
        options: {
          urls: [RABBITMQ_URL],
          queue: 'event_bus',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  providers: [ImageService],
  controllers: [ImageController],
})
export class ImageModule {}
