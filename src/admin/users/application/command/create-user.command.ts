import { RoleEnum } from "../../domain/value-object/role.enum";

export class CreateUserCommand {
  public readonly username: string;
  public readonly email: string;
  public readonly mobile: string;
  public readonly password: string;
  public readonly firstname?: string;
  public readonly lastname?: string;
  public readonly courseIds?: string[];
  public readonly status?: boolean;
  public readonly role?: RoleEnum;

  // get username(): string {
  //   return this._username;
  // }
  //
  // get email(): string {
  //   return this._email;
  // }
  //
  // get mobile(): string {
  //   return this._mobile;
  // }
  //
  // get password(): string {
  //   return this._password;
  // }
  //
  // get firstname(): string {
  //   return this._firstname;
  // }
  //
  // get lastname(): string {
  //   return this._lastname;
  // }
  //
  // get courseIds(): string[] {
  //   return this._courseIds;
  // }
  //
  // get status(): boolean {
  //   return this._status;
  // }
  //
  // get role(): RoleEnum {
  //   return this._role;
  // }
  // constructor(createUserCommand: CreateUserCommand) {
  //   this._username = createUserCommand.username
  //   this._email = createUserCommand.email
  //   this._mobile = createUserCommand.mobile
  //   this._password = createUserCommand.password
  //   this._firstname = createUserCommand?.firstname
  //   this._lastname = createUserCommand?.lastname
  //   this._status = createUserCommand?.status
  //   this._role = createUserCommand?.role
  //
  //   this._courseIds = createUserCommand?.courseIds
  // }
}