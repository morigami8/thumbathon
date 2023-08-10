import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';
import { CreateImageDto } from './dtos/createimage.dto';

@Injectable()
export class ImageService {
  private logger = new Logger(ImageService.name);
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  async createImage(createImageDto: CreateImageDto) {
    this.logger.log('createImageDto: ', createImageDto);
    await this.imageRepository.save(createImageDto);
  }
}
