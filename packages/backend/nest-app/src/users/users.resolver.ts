import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Users } from 'src/users/entities/users.entity';
import {
  CreateAccountInput,
  CreateAccountOutput,
} from 'src/users/dto/create-account.dto';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [Users], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Mutation((returns) => CreateAccountOutput)
  async createAccount(@Args('input') loginInput: CreateAccountInput) {
    return this.usersService.createAccount(loginInput);
  }
}
