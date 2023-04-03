import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Group } from './groups.entity';

export enum Sexuality {
    MALE = '남자',
    FEMALE = '여자',
}

registerEnumType(Sexuality, { name: 'Sexuality' });

@Entity()
@ObjectType()
export class Participant extends CoreEntity {
    @Field((type) => String)
    @Column()
    name: string; // 이름

    @Field((type) => Sexuality)
    @Column({ type: 'enum', enum: Sexuality })
    sexuality: Sexuality; // 성별

    @Field((type) => String)
    @Column()
    contact: string; // 연락처

    @Field((type) => Date)
    @Column()
    birth: Date; // 생년월일

    @Field((type) => String)
    @Column()
    tag: string; // 명찰기재용 소속기관

    @Field((type) => Boolean)
    @Column()
    discount: boolean; // 경북도민 여객선비 할인여부

    @Field((type) => Number)
    @Column()
    deposit: number; // 교육비

    @Field((type) => String)
    @Column({ nullable: true })
    roomMateTarget: string; // 같은방 희망자

    @Field((type) => String)
    @Column()
    department: string; // 부서

    @Field((type) => String)
    @Column()
    position: string; // 직급

    @Field((type) => String)
    @Column()
    company: string; // 기초

    @Field((type) => String)
    @Column()
    companyGroup: string; // 광역

    @Field((type) => String)
    @Column()
    companyContact: string; // 행정 전화번호

    @Field((type) => Group)
    @ManyToOne((type) => Group, (group) => group.participants, {
        onDelete: 'CASCADE',
        nullable: true,
    })
    group: Group;
}
