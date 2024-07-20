import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: [
      'https://what-bothers-you-and-us.as.r.appspot.com',
      'http://localhost:5173',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Optional: specify methods you want to allow
    allowedHeaders: 'Content-Type, Accept', // Optional: specify headers you want to allow
  })
  const PORT = Number(process.env.PORT) || 3000
  await app.listen(PORT)
}
bootstrap()