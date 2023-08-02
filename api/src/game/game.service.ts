import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { GameDocument } from './game.schema';
import { GameDto } from './dto/game.dto';

@Injectable()
export class GameService {
  constructor(
    @InjectModel('Game') private readonly gameModel: Model<GameDocument>,
  ) {}

  async create(createGameDto: GameDto): Promise<GameDocument> {
    const createdGame = new this.gameModel(createGameDto);
    return createdGame.save();
  }

  async findAll(): Promise<GameDocument[]> {
    return this.gameModel.find().exec();
  }

  async findOne(id: string): Promise<GameDocument> {
    return this.gameModel.findById(id).exec();
  }

  async update(id: string, updateGameDto: GameDto): Promise<GameDocument> {
    try {
      const existUser = await this.findOne(id);

      existUser.name = updateGameDto.name ?? existUser.name;
      existUser.price = updateGameDto.price ?? existUser.price;
      existUser.description =
        updateGameDto.description ?? existUser.description;

      return existUser.save();
    } catch (error) {
      throw new NotFoundException(
        `The game named "${updateGameDto.name}" not exist`,
        { cause: new Error(), description: error.message },
      );
    }
  }

  async remove(id: string) {
    return this.gameModel.deleteOne({ _id: id }).exec();
  }
}
