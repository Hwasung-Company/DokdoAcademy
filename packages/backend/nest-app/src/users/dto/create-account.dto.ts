import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CreateAccountDto as ICreateAccountInput } from '@common/dto/users/create-account.dto';
import { CoreOutput } from 'src/common/dto/core-ouput.dto';
import { UserRole } from '@common/entities/users/users.entity';

@InputType()
export class CreateAccountInput implements ICreateAccountInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => UserRole)
  role: UserRole;
}

@ObjectType()
export class CreateAccountOutput extends CoreOutput {}
