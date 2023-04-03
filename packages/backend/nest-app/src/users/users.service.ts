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

    findOne(username: string) {
        return this.users.findOne({
            where: { username },
            select: ['password', 'username', 'role', '_id'],
        });
    }

    findAll() {
        return this.users.find();
    }

    findUserByUsername(username: string) {
        return this.users.findOne({ where: { username } });
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
            await this.users.save(
                this.users.create({ username, password, role }),
            );
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

    async login({
        username,
        password,
    }: {
        username: string;
        password: string;
    }) {
        try {
            const user = await this.users.findOne({ where: { username } });
            if (!user) {
                return {
                    ok: false,
                    error: '존재하지 않는 계정입니다.',
                };
            }
            const passwordCorrect = await user.checkPassword(password);
            if (!passwordCorrect) {
                return {
                    ok: false,
                    error: '비밀번호가 일치하지 않습니다.',
                };
            }
            return {
                ok: true,
            };
        } catch (e) {
            return {
                ok: false,
                error: '로그인에 실패했습니다.',
            };
        }
    }
}
