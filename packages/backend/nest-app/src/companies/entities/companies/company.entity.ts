import { Field, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column } from 'typeorm';

@ObjectType()
export class Company extends CoreEntity {
  @Field((type) => String)
  @Column()
  name: string;

  @Field((type) => String)
  @Column()
  address: string;

  @Field((type) => String)
  @Column()
  contact: string;

  @Field((type) => String)
  @Column({ nullable: true })
  phone: string;

  @Field((type) => String)
  @Column({ nullable: true })
  email: string;
}
