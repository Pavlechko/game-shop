import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserDocument } from './user.schema';
import { CreateUserDto } from './dto/user.dto';
import { User, UserWihtoutPass } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  _getUser(user: UserDocument): UserWihtoutPass {
    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
    };
  }

  async create(createUserDTO: User): Promise<UserDocument> {
    const createdUser = new this.userModel(createUserDTO);
    return createdUser.save();
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<UserWihtoutPass | null> {
    const user = await this.userModel.findById(id).exec();
    if (!user) return null;

    return this._getUser(user);
  }
}
