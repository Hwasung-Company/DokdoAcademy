import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // limit the size of the request body to 5mb
    app.use(express.json({ limit: '5mb' }));

    await app.listen(3001);
}
bootstrap();
