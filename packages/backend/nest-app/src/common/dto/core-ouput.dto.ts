import { Field, ObjectType } from '@nestjs/graphql';
import { CoreOutput as ICoreOutput } from '@common/dto/common/core.dto';

@ObjectType()
export class CoreOutput implements ICoreOutput {
  @Field(() => Boolean)
  ok: boolean;

  @Field(() => String, { nullable: true })
  error?: string;

  @Field(() => String, { nullable: true })
  message?: string;
}
