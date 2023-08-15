import { Body, Controller, Post } from '@nestjs/common';
import { CreateImageDto } from './dtos/createimage.dto';
import { ImageService } from './image.service';
import { ResizeImageDto } from './dtos/resizeImage.dto';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('/create')
  async createImage(@Body() createImageDto: CreateImageDto) {
    await this.imageService.createImage(createImageDto);
  }

  @Post('/resize')
  async resizeImage(@Body() resizeImageDto: ResizeImageDto) {
    return this.imageService.resizeImage(resizeImageDto);
  }
}
