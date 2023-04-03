import { ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Schedule extends CoreEntity {}
