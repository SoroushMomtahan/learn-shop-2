import { UserEntity } from "../../resource/common/entity/user.entity";

export type options = {
    relations?: ('courses' | 'comments')[],
    select ?: (keyof UserEntity)[],
    withDeleted?:boolean,
    order?: {
        [property in keyof UserEntity]?:('ASC' | 'DESC')
    },
    take?:number,
    skip?:number
}