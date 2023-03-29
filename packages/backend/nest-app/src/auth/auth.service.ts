import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/users/entities/users.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (!user) return null;
        if (await user.checkPassword(password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: Users) {
        const payload = {
            username: user.username,
            sub: user._id,
            role: user.role,
        };
        return {
            access_token: this.jwtService.sign(payload),
            role: user.role,
            ok: true,
        };
    }

    async verify(token: string) {
        return await this.jwtService.verify(token);
    }
}
