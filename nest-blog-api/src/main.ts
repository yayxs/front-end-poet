// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';


import * as mongoose from 'mongoose';
import { pipe } from 'rxjs';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  // 设置默认 mongoose 连接
  // const mongoDB = 'mongodb://127.0.0.1:27017/nest-blog-api';
  // mongoose.connect(mongoDB,
  //   {
  //     useNewUrlParser: true,
  //     useFindAndModify: false,
  //     useCreateIndex: true
  //   }
  // )
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  const options = new DocumentBuilder()
    .setTitle('基于nest.js简易博客API')
    .setDescription('nest.js')
    .setVersion('1.0')
    .addTag('blog标签')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();