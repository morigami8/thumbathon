import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import {
  ImageFormat,
  ImageResizeEventDto,
} from '../image/events/image-resize.event';
import * as sharp from 'sharp';
import axios from 'axios';
import { Injectable, Logger } from '@nestjs/common';
import { RESIZE_IMAGE_EVENT } from '../common/constants';
import { homedir } from 'os';
const downloadsDir = `${homedir()}/Downloads/new_image88.jpeg`;

@Injectable()
export class ImageEventGateway {
  private readonly logger = new Logger(ImageEventGateway.name);

  @EventPattern(RESIZE_IMAGE_EVENT)
  async resizeImage(
    @Payload() eventData: ImageResizeEventDto,
    @Ctx() context: RmqContext,
  ) {
    const {
      data: {
        originalPath,
        resizeParameters: { width, height, format, quality, outputPath },
      },
    } = eventData;

    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();

    this.logger.log('made it to RESIZE_IMAGE_EVENT');

    try {
      this.logger.log('Getting image');
      const response = await axios.get(originalPath, {
        responseType: 'arraybuffer',
      });

      const imageBuffer = response.data;

      const imageProcessing = await sharp(imageBuffer)
        .resize({ width, height })
        .jpeg({ quality });

      this.logger.log('done processing file');
      await imageProcessing.toFile(downloadsDir);

      this.logger.log('put file in path');
      channel.ack(originalMessage);
    } catch (error) {
      channel.nack(originalMessage);
      console.log('Error resizing image:', error);
    }
  }
}
