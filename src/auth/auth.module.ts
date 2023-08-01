import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/user/users.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/local.strategy';

@Module({
  imports: [PassportModule],
  providers: [UsersService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {};
