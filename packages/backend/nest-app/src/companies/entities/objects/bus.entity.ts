import { Column, Entity, ManyToOne } from 'typeorm';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Target } from 'src/companies/entities/objects/target.entity';
import { BusCompany } from 'src/companies/entities/companies/bus-company.entity';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Bus extends Target {
  @Field((type) => Number)
  @Column()
  seats: number;

  @Field((type) => BusCompany)
  @ManyToOne((type) => BusCompany, (busCompany) => busCompany.buses, {
    onDelete: 'CASCADE',
  })
  busCompany: BusCompany;
}
