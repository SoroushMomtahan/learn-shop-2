import { RoleEnum } from "./value-object/role.enum";
import * as crypto from "crypto";

export class UserModel {

  private readonly _id: string;
  private readonly _firstname: string;
  private readonly _username: string;
  private readonly _lastname: string;
  private readonly _email: string;
  private readonly _mobile: string;
  private readonly _password: string;
  private readonly _courseIds: number[];
  private readonly _status: boolean;
  private readonly _role: RoleEnum;
  private readonly _createAt: Date;
  private readonly _updateAt: Date;
  private readonly _deleteAt: Date;

  get id(): string {
    return this._id;
  }

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

  get courseIds(): number[] {
    return this._courseIds;
  }

  get status(): boolean {
    return this._status;
  }

  get role(): RoleEnum {
    return this._role;
  }

  get createAt(): Date {
    return this._createAt;
  }

  get updateAt(): Date {
    return this._updateAt;
  }

  get deleteAt(): Date {
    return this._deleteAt;
  }

  constructor(user: Partial<UserModel>) {
    this._id = crypto.randomUUID();
    this._username = user.username;
    this._firstname = user.firstname;
    this._lastname = user.lastname;
    this._email = user.email;
    this._mobile = user.mobile;
    this._password = user.password;
    this._courseIds = user.courseIds;
    this._status = user.status;
    this._role = user.role ?? RoleEnum.USER;
    this._createAt = user.createAt ?? new Date(Date.now());
    this._updateAt = user.updateAt ?? new Date(Date.now());
    this._deleteAt = user.deleteAt;
  }
}