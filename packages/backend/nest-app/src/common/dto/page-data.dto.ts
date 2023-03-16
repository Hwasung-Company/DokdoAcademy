import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PageData {
  @Field(() => Number)
  total: number;

  @Field(() => Number)
  totalPage: number;

  @Field(() => Number)
  page: number;
}
