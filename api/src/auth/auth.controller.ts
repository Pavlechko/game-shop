import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { UserWihtoutPass } from 'src/user/entity/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  signUp(@Body() newUser: CreateUserDto): Promise<UserWihtoutPass> {
    return this.authService.signUp(newUser);
  }
}
