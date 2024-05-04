import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ------------------------- Swagger --------------------
  const config = new DocumentBuilder()
    .setTitle('Learn-Shop')
    .setDescription('Learn Shop is Bad Shop')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // -------------------------- Validation ---------------------------
  app.useGlobalPipes(new ValidationPipe({
    stopAtFirstError:true,
    transform:true,
    whitelist:true,
    forbidNonWhitelisted:true
  }));
  // ----------------- Listen To Port ----------------------
  await app.listen(4000);
}
bootstrap();
