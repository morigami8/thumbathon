import { Injectable, Logger } from '@nestjs/common';
import * as sharp from 'sharp';
import * as fs from 'fs';
import * as path from 'path';
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
    const downloadsDir = '/tmp/downloads';

    if (!fs.existsSync(downloadsDir)) {
      fs.mkdirSync(downloadsDir, { recursive: true });
    }

    const fileDestination = path.join(downloadsDir, `${fileName}.jpeg`);

    this.logger.log('Resizing Image...');
    this.logger.log('Download Directory:', fileDestination);

    try {
      const response = await axios.get(originalPath, {
        responseType: 'arraybuffer',
      });

      const imageBuffer = response.data;

      const imageProcessing = await sharp(imageBuffer)
        .resize({ width, height })
        .jpeg({ quality })
        .toBuffer();

      //await imageProcessing.toFile(fileDestination);
      fs.writeFileSync(fileDestination, imageProcessing);

      if (fs.existsSync(fileDestination))
        this.logger.log(`File sucessfully written to : ${fileDestination}`);
      else this.logger.log(`File failed to write to : ${fileDestination}`);

      return fileDestination;
    } catch (error) {
      this.logger.error('Error resizing image:', error);
      throw new Error('Error resizing image');
    }
  }
}
