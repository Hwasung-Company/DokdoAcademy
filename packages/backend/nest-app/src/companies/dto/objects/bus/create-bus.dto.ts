import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Bus } from 'src/companies/entities/objects/bus.entity';
import { CoreOutput } from 'src/common/dto/core-ouput.dto';
import { CustomUuidScalar } from 'src/common/scalars/uuid';

@InputType()
export class CreateBusInput extends PickType(Bus, [
  'name',
  'price',
  'description',
  'seats',
]) {
  @Field((type) => CustomUuidScalar)
  busCompanyId: string;
}

@ObjectType()
export class CreateBusOutput extends CoreOutput {}
