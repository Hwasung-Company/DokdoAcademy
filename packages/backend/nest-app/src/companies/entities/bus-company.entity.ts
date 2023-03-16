import { InputType, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';
import { Company } from 'src/companies/entities/company.entity';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class BusCompany extends Company {}
