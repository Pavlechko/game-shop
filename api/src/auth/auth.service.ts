import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UserService } from 'src/user/user.service';
import { CreateUserDto, UserDTO } from 'src/user/dto/user.dto';
import { UserWihtoutPass } from 'src/user/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtServise: JwtService,
  ) {}

  async signUp(user: CreateUserDto): Promise<UserWihtoutPass> {
    const { name, email, password } = user;

    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
      throw new BadRequestException('Email taken');
    }

    const hashPassword = await bcrypt.hash(password, 6);

    const newUser = await this.userService.create({
      name,
      email,
      hashPassword,
    });

    return this.userService._getUser(newUser);
  }

  async _doesPasswordMatch(
    password: string,
    hashPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }

  async _validateUser(user: UserDTO): Promise<UserWihtoutPass> {
    const existingUser = await this.userService.findByEmail(user.email);
    const doesUserExist = !!existingUser;

    if (!doesUserExist) throw new NotFoundException(`The user not exist`);

    const doesPasswordMatch = await this._doesPasswordMatch(
      user.password,
      existingUser.hashPassword,
    );

    if (!doesPasswordMatch) throw new BadRequestException(`Wrong password`);

    return this.userService._getUser(existingUser);
  }

  async signIn(user: UserDTO): Promise<{ token: string }> {
    const existingUser = await this.userService.findByEmail(user.email);
    const doesUserExist = !!existingUser;

    if (!doesUserExist) throw new NotFoundException(`The user not exist`);

    const doesPasswordMatch = await this._doesPasswordMatch(
      user.password,
      existingUser.hashPassword,
    );

    if (!doesPasswordMatch) throw new BadRequestException(`Wrong password`);

    const validateUser = this.userService._getUser(existingUser);
    const jwt = await this.jwtServise.signAsync({ validateUser });
    return { token: jwt };
  }
}
