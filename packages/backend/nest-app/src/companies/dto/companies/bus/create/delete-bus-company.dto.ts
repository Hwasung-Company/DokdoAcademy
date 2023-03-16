import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreOutput } from 'src/common/dto/core-ouput.dto';
import { CustomUuidScalar } from 'src/common/scalars/uuid';

@InputType()
export class DeleteBusCompanyInputs {
  @Field((type) => [CustomUuidScalar])
  _ids: string[];
}

@ObjectType()
export class DeleteBusCompanyOutput extends CoreOutput {}
