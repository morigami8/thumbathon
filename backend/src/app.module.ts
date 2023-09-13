import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageModule } from './modules/image/image.module';
import { Image } from './modules/image/entities/image.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ImageProcessingModule } from './modules/image-processing/image-processing.module';
import { Users } from './modules/user/entities/users.entity';
import { UsersModule } from './modules/user/users.module';
import { FileDownloaderModule } from './modules/file-downloader/file-downloader.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: './../.env',
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: +configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [Users, Image],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    ImageModule,
    ImageProcessingModule,
    FileDownloaderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
