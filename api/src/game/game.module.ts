import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GameService } from './game.service';
import { GameController } from './game.controller';
import { GameSchema } from './game.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }])],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
