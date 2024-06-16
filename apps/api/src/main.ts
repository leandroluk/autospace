import {NestFactory} from '@nestjs/core';
import {SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {swagger} from './swagger';
import {vars} from './vars';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('/', app, document);
  await app.listen(vars.port);
}
bootstrap();
