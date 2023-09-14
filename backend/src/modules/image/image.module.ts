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
          urls: [process.env.RABBITMQ_URL],
          queue: 'event_bus',
          //noAck: false,
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

//Turn off auto acknowledge?
