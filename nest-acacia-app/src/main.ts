import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Version, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.GLOBAL_PREFIX ?? 'api');
  app.enableVersioning({
    type: VersioningType.URI,
  })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
