import { Body, Controller, Post } from '@nestjs/common';
import { CreateImageDto } from './dtos/createimage.dto';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('/create')
  async createImage(@Body() createImageDto: CreateImageDto) {
    await this.imageService.createImage(createImageDto);
  }
}
