import { RoleEnum } from "../../domain/value-object/role.enum";

export class CreateUserCommand {
  private readonly _username: string;
  private readonly _email: string;
  private readonly _mobile: string;
  private readonly _password: string;
  private readonly _firstname: string;
  private readonly _lastname: string;
  private readonly _courseIds: number[];
  private readonly _status: boolean;
  private readonly _role: RoleEnum;

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

  get firstname(): string {
    return this._firstname;
  }

  get lastname(): string {
    return this._lastname;
  }

  get courseIds(): number[] {
    return this._courseIds;
  }

  get status(): boolean {
    return this._status;
  }

  get role(): RoleEnum {
    return this._role;
  }
  constructor(createUserCommand: Partial<CreateUserCommand>) {
    this._username = createUserCommand.username
    this._email = createUserCommand.email
    this._mobile = createUserCommand.mobile
    this._password = createUserCommand.password

    this._firstname = createUserCommand.firstname
    this._lastname = createUserCommand.lastname
    this._courseIds = createUserCommand.courseIds
    this._status = createUserCommand.status ?? true
    this._role = createUserCommand.role ?? RoleEnum.USER
  }
}