import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Entity, OneToMany } from 'typeorm';
import { Company } from './company.entity';
import { Bus } from 'src/companies/entities/objects/bus.entity';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class BusCompany extends Company {
  @Field((type) => [Bus], { nullable: true })
  @OneToMany((type) => Bus, (bus) => bus.busCompany, { nullable: true })
  buses: Bus[];
}
