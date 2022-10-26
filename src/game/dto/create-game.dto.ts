import { Type } from "class-transformer";
import { IsDate } from "class-validator";

export class CreateGameDto {
    homeTeam: string;
    awayTeam: String;

    @IsDate()
    @Type(() => Date)
    gameTime: Date
}
