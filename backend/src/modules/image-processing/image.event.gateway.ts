import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { ImageResizeEventDto } from '../image/events/image-resize.event';
import { Controller, Logger } from '@nestjs/common';
import { RESIZE_IMAGE_EVENT } from '../common/constants';
import { ImageProcessingService } from './image-processing.service';

@Controller()
export class ImageEventGateway {
  private readonly logger = new Logger(ImageEventGateway.name);

  constructor(private imageProcessingService: ImageProcessingService) {}

  @EventPattern(RESIZE_IMAGE_EVENT)
  async resizeImage(
    @Payload() eventData: ImageResizeEventDto,
    @Ctx() context: RmqContext,
  ) {
    const {
      data: {
        originalPath,
        fileName,
        resizeParameters: { width, height, format, quality },
      },
    } = eventData;

    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();

    try {
      const filePath = await this.imageProcessingService.resizeImage(
        originalPath,
        fileName,
        width,
        height,
        quality,
      );
      this.logger.log(`Image saved at: ${filePath}`);
      console.log(`Image saved at: ${filePath}`);
      channel.ack(originalMessage);
    } catch (error) {
      channel.nack(originalMessage);
      this.logger.error('Error processing the image resize event:', error);
      console.log('Error processing the image resize event:', error);
    }
  }
}
