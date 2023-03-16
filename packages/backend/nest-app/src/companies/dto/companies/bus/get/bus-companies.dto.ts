import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { BusCompany } from 'src/companies/entities/companies/bus-company.entity';
import { PageData } from 'src/common/dto/page-data.dto';

@InputType()
export class GetBusCompaniesInput {
  @Field(() => Number)
  page: number;
}

@ObjectType()
export class GetBusCompaniesOutput extends PageData {
  @Field((type) => [BusCompany])
  data: BusCompany[];
}

@InputType()
export class SearchBusCompaniesInput {
  @Field(() => String)
  name: string;
}
@ObjectType()
export class SearchBusCompaniesOutput extends PageData {
  @Field((type) => [BusCompany])
  data: BusCompany[];
}
