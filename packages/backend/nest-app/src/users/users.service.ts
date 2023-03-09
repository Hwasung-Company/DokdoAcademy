import { Injectable } from '@nestjs/common';
import { Users } from 'src/users/entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from 'src/users/dto/create-account.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly users: Repository<Users>,
  ) {}

  findAll() {
    return `This action returns all users`;
  }

  async createAccount({
    username,
    password,
    role,
  }: CreateAccountInput): Promise<CreateAccountOutput> {
    try {
      const exists = await this.users.findOne({ where: { username } });
      if (exists) {
        return {
          ok: false,
          error: '이미 존재하는 계정입니다.',
        };
      }
      await this.users.save(this.users.create({ username, password, role }));
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        error: '계정 생성에 실패했습니다.',
      };
    }
  }
}
