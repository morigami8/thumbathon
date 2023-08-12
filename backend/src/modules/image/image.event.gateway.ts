import { EventPattern, Payload } from '@nestjs/microservices';
import { ImageFormat, ImageResizeEventDto } from './events/image-resize.event';
import sharp from 'sharp';
import axios from 'axios';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ImageEventGateway {
  private readonly logger = new Logger(ImageEventGateway.name);

  @EventPattern('RESIZE_IMAGE_EVENT')
  async resizeImage(@Payload() eventData: ImageResizeEventDto) {
    const {
      data: {
        originalPath,
        resizeParameters: { width, height, format, quality, outputPath },
      },
    } = eventData;

    try {
      this.logger.log('Getting image');
      const response = await axios.get(originalPath, {
        responseType: 'arraybuffer',
      });

      const imageBuffer = response.data;

      let imageProcessing = sharp(imageBuffer);

      if (width && height) {
        imageProcessing = imageProcessing.resize(width, height);
      }

      if (format === ImageFormat.JPEG) {
        imageProcessing = imageProcessing.jpeg({ quality });
      }

      this.logger.log('done processing file');
      await imageProcessing.toFile(outputPath);
      this.logger.log('put file in path');
    } catch (error) {
      console.log('Error resizing image:', error);
    }
  }
}
