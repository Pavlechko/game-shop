import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/steam'),
    GameModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
