import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { Section } from '../entities/sections.entity';

@InputType()
export class CreateSectionInput extends PickType(Section, [
    'name',
    'sponsor',
    'year',
]) {}
