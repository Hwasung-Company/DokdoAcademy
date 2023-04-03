import {
    InputType,
    IntersectionType,
    PartialType,
    PickType,
} from '@nestjs/graphql';
import { Tour } from '../entities/tours.entity';
import { Section } from 'src/sections/entities/sections.entity';

@InputType()
export class CreateTourInput extends IntersectionType(
    PartialType(Tour),
    PickType(Section, ['_id']),
) {}

@InputType()
export class DeleteTourInput extends PickType(Tour, ['_id']) {}
