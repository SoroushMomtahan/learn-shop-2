import { RoleEnum } from "./value-object/role.enum";
import { BaseModel } from "../../../common/model/base-model";

export class UserModel extends BaseModel{

    private readonly _firstname: string;
    private readonly _lastname: string;

    private readonly _username: string;
    private readonly _email: string;
    private readonly _mobile: string;
    private readonly _password: string;

    private _status: boolean;
    private _role: RoleEnum;

    private readonly _courseIds: string[];

    get firstname(): string {
        return this._firstname;
    }

    get lastname(): string {
        return this._lastname;
    }

    get username(): string {
        return this._username;
    }

    get email(): string {
        return this._email;
    }

    get mobile(): string {
        return this._mobile;
    }

    get password(): string {
        return this._password;
    }

    get status(): boolean {
        return this._status;
    }

    get role(): RoleEnum {
        return this._role;
    }

    get courseIds(): string[] {
        return this._courseIds;
    }

    set status(value: boolean) {
        this._status = value;
    }
    set role(value: RoleEnum) {
        this._role = value;
    }

    constructor(user: Partial<UserModel>) {
        super(user);

        this._username = user.username;
        this._firstname = user.firstname;
        this._lastname = user.lastname;
        this._email = user.email;
        this._mobile = user.mobile;
        this._password = user.password;
        this._status = user.status;
        this._role = user.role;

        this._courseIds = user.courseIds;

    }

    public dateConvertor(format: string) {
        // this.createAt = new Date(this.createAt.toLocaleDateString(format));
        // this.updateAt = new Date(this.updateAt.toLocaleDateString(format));
        // this.deleteAt = new Date(this.deleteAt.toLocaleDateString(format));

    }
}