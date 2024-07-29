import {IsString} from "class-validator";

export class OneTimeLinkDto {
    @IsString()
    value: string;
}
