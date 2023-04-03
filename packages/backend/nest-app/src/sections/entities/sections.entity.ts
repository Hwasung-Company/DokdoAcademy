import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Tour } from 'src/tours/entities/tours.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
@InputType('SectionInput')
@ObjectType({
    isAbstract: true,
})
export class Section extends CoreEntity {
    @Column()
    @Field((type) => String)
    name: string;

    @Column({ nullable: true })
    @Field((type) => String, { nullable: true })
    sponsor: string;

    @Column()
    @Field((type) => Number)
    year: number;

    @OneToMany((type) => Tour, (tour) => tour.section, {
        eager: true,
    })
    @Field((type) => [Tour], {
        nullable: true,
    })
    tours: Tour[];
}
