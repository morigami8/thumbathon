import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UsersService } from './users.service';

@Controller('Users')
export class UsersController {
  constructor(
    @Inject(UsersService) private readonly UsersService: UsersService,
  ) {}

  @Post('/register')
  async createUsers(@Body() createUsersDto: CreateUserDto) {
    return await this.UsersService.handleCreateUsers(createUsersDto);
  }
}
