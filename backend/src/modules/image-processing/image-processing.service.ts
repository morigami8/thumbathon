import { Injectable, Logger } from '@nestjs/common';
import * as sharp from 'sharp';
import axios from 'axios';

@Injectable()
export class ImageProcessingService {
  private readonly logger = new Logger(ImageProcessingService.name);

  async resizeImage(
    originalPath: string,
    fileName: string,
    width: number,
    height: number,
    quality: number,
  ): Promise<string> {
    const downloadsDir = `/tmp/downloads/${fileName}.jpeg`;

    this.logger.log('Resizing Image...');
    this.logger.log('Download Directory:', downloadsDir);

    try {
      const response = await axios.get(originalPath, {
        responseType: 'arraybuffer',
      });

      const imageBuffer = response.data;

      const imageProcessing = await sharp(imageBuffer)
        .resize({ width, height })
        .jpeg({ quality });

      await imageProcessing.toFile(downloadsDir);

      return downloadsDir;
    } catch (error) {
      this.logger.error('Error resizing image:', error);
      throw new Error('Error resizing image');
    }
  }
}
