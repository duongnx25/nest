import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatController } from './cat/controllers/cat.controller';
import { AppService } from './app.service';
import { CatService } from "./cat/services/cat.service";

@Module({
  imports: [],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {}
