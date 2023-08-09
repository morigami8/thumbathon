import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';

@Injectable()
export class UserService {
  private logger: Logger = new Logger(UserService.name);
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async handleCreateUser(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.save(createUserDto);

    this.logger.log('A new user has been generated: ', user);
    return user;
  }
}
