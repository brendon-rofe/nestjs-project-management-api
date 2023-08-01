import { Module } from '@nestjs/common';
import { UsersModule } from './user/users.module';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [UsersModule, AuthModule, ProjectsModule],
})
export class AppModule {};
