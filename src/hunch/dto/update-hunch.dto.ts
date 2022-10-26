import { PartialType } from '@nestjs/mapped-types';
import { CreateHunchDto } from './create-hunch.dto';

export class UpdateHunchDto extends PartialType(CreateHunchDto) {
    homeTeamScore: string;

    awayTeamScore: string;
}
