import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';

@InputType({ isAbstract: true })
@ObjectType()
export class Target extends CoreEntity {
  @Field((type) => String)
  @Column()
  name: string;

  @Field((type) => Number)
  @Column()
  price: number;

  @Field((type) => String)
  @Column({ nullable: true })
  description: string;
}
