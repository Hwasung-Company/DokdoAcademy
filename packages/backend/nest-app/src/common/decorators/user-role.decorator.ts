import { UserRole as userRoleEnum } from '@libs/common/dist/entities/users/users.entity';
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

export const USER_ROLE_KEY = 'user-role';

export const UserRoles = (...roles: userRoleEnum[]) =>
    SetMetadata(USER_ROLE_KEY, roles);

@Injectable()
export class UserRoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const ctx = GqlExecutionContext.create(context);

        const user = ctx.getContext().req.user; // req.user는 passport에서 넣어준다.
        // 그래서 데코레이터의 위치에 따라서 req.user가 달라진다.

        const roles = this.reflector.getAllAndOverride<userRoleEnum[]>(
            USER_ROLE_KEY,
            [
                context.getClass(), // 데코레이터가 클래스에 붙어있을 경우
                context.getHandler(), // 데코레이터가 메소드에 붙어있을 경우
            ],
        );

        if (!roles) {
            return true;
        }

        return roles.includes(user.role);
    }
}
