import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import {
  ImageFormat,
  ImageResizeEventDto,
} from '../image/events/image-resize.event';
import * as sharp from 'sharp';
import axios from 'axios';
import { Controller, Injectable, Logger } from '@nestjs/common';
import { RESIZE_IMAGE_EVENT } from '../common/constants';
import { homedir } from 'os';

@Controller()
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
        fileName,
        resizeParameters: { width, height, format, quality, outputPath },
      },
    } = eventData;

    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    const downloadsDir = `${homedir()}/Downloads/${fileName}.jpeg`;

    this.logger.log('made it to RESIZE_IMAGE_EVENT');

    try {
      const response = await axios.get(originalPath, {
        responseType: 'arraybuffer',
      });

      const imageBuffer = response.data;

      const imageProcessing = await sharp(imageBuffer)
        .resize({ width, height })
        .jpeg({ quality });

      await imageProcessing.toFile(downloadsDir);

      channel.ack(originalMessage);
    } catch (error) {
      channel.nack(originalMessage);
      console.log('Error resizing image:', error);
    }
  }
}
