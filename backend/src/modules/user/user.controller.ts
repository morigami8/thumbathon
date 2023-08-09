import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Post('/register')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.handleCreateUser(createUserDto);
  }
}
