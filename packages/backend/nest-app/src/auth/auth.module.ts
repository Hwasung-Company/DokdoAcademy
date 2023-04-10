import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/auth/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants/constants';
import { AuthResolver } from 'src/auth/auth.resolver';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
            }),
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy, AuthResolver],
    exports: [AuthService],
})
export class AuthModule {}
