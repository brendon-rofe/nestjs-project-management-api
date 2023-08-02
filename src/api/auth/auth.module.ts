import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/api/user/users.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [PassportModule],
  providers: [UsersService],
  controllers: [AuthController]
})
export class AuthModule {};
