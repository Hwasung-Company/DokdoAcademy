import { Field, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Section extends CoreEntity {
    @Column()
    @Field((type) => String)
    name: string;

    @Column()
    @Field((type) => String)
    sponsor: string;

    @Column()
    @Field((type) => String)
    year: string;
}
