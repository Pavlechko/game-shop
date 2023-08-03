import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserService } from 'src/user/user.service';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { User, UserWihtoutPass } from 'src/user/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 6);
  }

  async signUp(user: CreateUserDto): Promise<UserWihtoutPass> {
    const { name, email, password } = user;

    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
      throw new BadRequestException('Email taken');
    }

    const hashPassword = await this.hashPassword(password);

    const newUser = await this.userService.create({
      name,
      email,
      hashPassword,
    });

    return this.userService._getUser(newUser);
  }
}
