import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Section } from 'src/sections/entities/sections.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Participant } from './paricipants.entity';

@Entity()
@InputType('TourInput')
@ObjectType({
    isAbstract: true,
})
export class Tour extends CoreEntity {
    @Field((type) => String)
    @Column()
    name: string;

    @Field((type) => Date)
    @Column()
    startDate: Date;

    @Field((type) => Date)
    @Column()
    endDate: Date;

    @Field((type) => String, { nullable: true })
    @Column({ nullable: true })
    description?: string;

    @Field((type) => String)
    @Column()
    gatheringPlace: string;

    @ManyToOne((type) => Section, (section) => section.tours)
    @JoinColumn({ name: 'section_id' })
    @Field((type) => Section)
    section: Section;

    @Field((type) => String)
    @Column()
    section_id: string;

    @Field((type) => [Participant])
    @OneToMany((type) => Participant, (participant) => participant.tour)
    participants: Participant[];
}
