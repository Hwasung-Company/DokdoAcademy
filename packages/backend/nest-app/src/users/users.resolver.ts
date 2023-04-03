import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Users } from 'src/users/entities/users.entity';
import {
    CreateAccountInput,
    CreateAccountOutput,
} from 'src/users/dto/create-account.dto';
import { LoginInput, LoginOutput } from 'src/users/dto/login.dto';
import { Req, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver(() => Users)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(() => [Users], { name: 'users' })
    @UseGuards(JwtAuthGuard)
    findAll() {
        return this.usersService.findAll();
    }

    @Query(() => Users, { name: 'user' })
    @UseGuards(JwtAuthGuard)
    profile(@Context() ctx) {
        return this.usersService.findUserByUsername(ctx.req.user.username);
    }

    @Mutation((returns) => CreateAccountOutput)
    async createAccount(@Args('input') loginInput: CreateAccountInput) {
        return this.usersService.createAccount(loginInput);
    }
}
