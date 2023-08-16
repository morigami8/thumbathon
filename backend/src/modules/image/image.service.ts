import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';
import { CreateImageDto } from './dtos/createimage.dto';
import { ResizeImageDto } from './dtos/resizeImage.dto';
import { ImageFormat, ImageResizeEventDto } from './events/image-resize.event';
import { v4 as uuidv4 } from 'uuid';
import { ClientProxy } from '@nestjs/microservices';
import { RESIZE_IMAGE_EVENT } from '../common/constants';

@Injectable()
export class ImageService {
  private logger = new Logger(ImageService.name);
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
    @Inject('EVENT_BUS') private readonly client: ClientProxy,
  ) {}

  async createImage(createImageDto: CreateImageDto) {
    this.logger.log('createImageDto: ', createImageDto);
    await this.imageRepository.save(createImageDto);
  }

  async resizeImage(resizeImageDto: ResizeImageDto) {
    const newImageResizeEvent: ImageResizeEventDto = {
      eventId: uuidv4(),
      eventType: RESIZE_IMAGE_EVENT,
      timestamp: Date.now().toString(),
      data: {
        imageId: '8',
        originalPath: resizeImageDto.url,
        userId: 25,
        fileName: resizeImageDto.fileName,
        resizeParameters: {
          width: resizeImageDto.width,
          height: resizeImageDto.height,
          format: ImageFormat.JPEG,
          quality: 90,
          outputPath: './',
        },
      },
    };

    await this.client.emit(RESIZE_IMAGE_EVENT, newImageResizeEvent);

    this.logger.log('emitted resize image: ', newImageResizeEvent);

    return newImageResizeEvent;
  }
}
