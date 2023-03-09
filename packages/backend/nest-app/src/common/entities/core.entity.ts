import { Field, ObjectType } from '@nestjs/graphql';
import { CoreEntity as ICoreEntity } from '@common/entities/core/core.entity';
import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
export class CoreEntity implements ICoreEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field((type) => String)
  _id: string;

  @CreateDateColumn()
  @Field((type) => Date)
  createdAt: Date;

  @UpdateDateColumn()
  @Field((type) => Date)
  updatedAt: Date;
}
