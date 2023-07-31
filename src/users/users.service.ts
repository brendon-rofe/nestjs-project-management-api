import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  private readonly users = [
    {
      userId: 1,
      username: "test",
      hash: "lakwhdklajwdlkj"
    },
  ];

  async findOne(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  };

  async create(user: any) {
    this.users.push(user);
  };

};
