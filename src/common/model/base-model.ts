import * as crypto from "crypto";

export class BaseModel {
    private _id?: string;
    private _createAt?: Date;
    private _updateAt?: Date;
    private _deleteAt?: Date;

    get id(): string {
        return this._id;
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

    set id(value: string) {
        this._id = value;
    }

    set createAt(value: Date) {
        this._createAt = value;
    }

    set updateAt(value: Date) {
        this._updateAt = value;
    }

    set deleteAt(value: Date) {
        this._deleteAt = value;
    }

    constructor(baseModel:Partial<BaseModel>) {
        this._id = baseModel.id;
        this._createAt = baseModel.createAt;
        this._updateAt = baseModel.updateAt;
        this._deleteAt = baseModel.deleteAt;
    }
}