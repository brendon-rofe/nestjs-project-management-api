import { Module } from '@nestjs/common';
import { UsersModule } from './api/user/users.module';
import { AuthModule } from './api/auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "root",
      database:"db",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false
    }),
    UsersModule,
    AuthModule, 
    ProjectsModule
  ],
})
export class AppModule {};
