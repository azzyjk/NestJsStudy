import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  userList = [new User(1, 23), new User(2, 25)];

  create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll(): User[] {
    return this.userList;
  }

  findOne(id: number): User {
    return this.userList[id];
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
