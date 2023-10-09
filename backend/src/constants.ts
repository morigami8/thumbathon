/* eslint-disable @typescript-eslint/no-var-requires */
import * as path from 'path';

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

export const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://127.0.0.1:5672';
