import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { InsertResult, Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';

@Injectable()
export class UsersService {
  private logger: Logger = new Logger(UsersService.name);
  constructor(
    @InjectRepository(Users)
    private readonly UsersRepository: Repository<Users>,
  ) {}

  async handleCreateUsers(
    createUsersDto: CreateUserDto,
  ): Promise<InsertResult> {
    const result = await this.UsersRepository.insert(createUsersDto);

    this.logger.log('A new Users has been generated: ', result);
    return result;
  }
}
