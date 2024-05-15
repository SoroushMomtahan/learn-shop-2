import {
    IsArray,
    IsBoolean,
    IsIn,
    IsOptional,
    IsString
} from "class-validator";

import { UserPropertiesEnum } from "../enum/user-properties.enum";
import { UserRelationsEnum } from "../enum/user-relations.enum";


export class FindUserOptionsDto {

    @IsArray()
    @IsString({ each: true })
    @IsIn(Object.getOwnPropertyNames(UserRelationsEnum), { each: true })
    @IsOptional()
    relations?: UserRelationsEnum[];

    @IsArray()
    @IsString({ each: true })
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum), { each: true })
    @IsOptional()
    select?: UserPropertiesEnum[];

    @IsBoolean()
    @IsOptional()
    withDeleted?: boolean = false;

    @IsString()
    @IsIn(Object.getOwnPropertyNames(UserPropertiesEnum))
    @IsOptional()
    orderBy?: UserPropertiesEnum

    @IsString()
    @IsIn(["asc", "desc"])
    @IsOptional()
    ascOrDec?:string;
}

