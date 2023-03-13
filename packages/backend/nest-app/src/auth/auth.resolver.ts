import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { LoginInput, LoginOutput } from 'src/users/dto/login.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { LocalStrategy } from 'src/auth/local.strategy';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginOutput)
  @UseGuards(GqlAuthGuard)
  @UseGuards(LocalStrategy)
  async login(@Args('loginInput') loginInput: LoginInput, @Context() ctx) {
    try {
      return this.authService.login(ctx.user);
    } catch (error) {
      return {
        ok: false,
        error,
      };
    }
  }
}
