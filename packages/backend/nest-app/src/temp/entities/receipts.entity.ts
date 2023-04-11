import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Receipts {
    @PrimaryGeneratedColumn('uuid')
    @Field((type) => String)
    _id: string;

    @Column()
    @Field((type) => String)
    name: string;

    @Column()
    @Field((type) => String)
    item: string;

    @Column()
    @Field((type) => Number)
    price: number;

    @Column()
    @Field((type) => Number)
    count: number;
    @Column()
    @Field((type) => Number)
    total: number;

    @Column()
    @Field((type) => Date)
    date: Date;

    @Column()
    @Field((type) => String)
    image: string;
}
