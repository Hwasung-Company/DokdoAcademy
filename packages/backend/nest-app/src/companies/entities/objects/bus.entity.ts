import { Column, Entity, ManyToOne } from 'typeorm';
import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Target } from 'src/companies/entities/objects/target.entity';
import { BusCompany } from 'src/companies/entities/companies/bus-company.entity';

enum BusType {
  NORMAL = 'NORMAL',
  MINIBUS = 'MINIBUS',
  BIG = 'BIG',
}

registerEnumType(BusType);

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Bus extends Target {
  @Field((type) => String)
  @Column()
  name: string;

  @Field((type) => String)
  @Column()
  number: string;

  @Field((type) => BusType)
  @Column({ type: 'enum', enum: BusType })
  type: BusType;

  @Field((type) => Number)
  @Column()
  capacity: number;

  @Field((type) => BusCompany)
  @ManyToOne((type) => BusCompany, (busCompany) => busCompany.buses, {
    onDelete: 'CASCADE',
  })
  busCompany: BusCompany;
}
