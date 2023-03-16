import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/core-ouput.dto';

@InputType()
export class CreateBusCompanyInput {
  @Field((type) => String)
  name: string;

  @Field((type) => String)
  address: string;

  @Field((type) => String)
  phone: string;

  @Field((type) => String)
  email?: string;

  @Field((type) => String)
  contact: string;
}

@ObjectType()
export class CreateBusCompanyOutput extends CoreOutput {}
