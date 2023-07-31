import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {

  constructor(private usersService: UsersService) {}

  @Post('register')
  async register(@Request() req) {
    return this.usersService.create(req.body);
  };

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  };

};
