import { Resolver } from '@nestjs/graphql';
import { Section } from './entities/sections.entity';

@Resolver(() => Section)
export class SectionsResolver {}
