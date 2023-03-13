import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Users } from 'src/users/entities/users.entity';
import { CoreOutput } from 'src/common/dto/core-ouput.dto';

@InputType()
export class LoginInput extends PickType(Users, ['username', 'password']) {}

@ObjectType()
export class LoginOutput extends CoreOutput {
  @Field((type) => String, { nullable: true })
  access_token?: string;
}
