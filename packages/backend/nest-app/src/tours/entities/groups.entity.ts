import { Field, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Participant } from './paricipants.entity';

@Entity()
@ObjectType()
export class Group extends CoreEntity {
    @Field((type) => String)
    @Column()
    name: string; // 그룹 이름 ex) 1호차, 2호차, 3호차

    @Field((type) => [Participant])
    @OneToMany((type) => Participant, (participant) => participant.group, {
        nullable: true,
        onDelete: 'SET NULL',
    })
    participants: Participant[];
}
