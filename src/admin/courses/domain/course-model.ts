import { BaseModel } from "../../../common/model/base-model";

export class CourseModel extends BaseModel {
    private _title: string;
    private _description: string;
    private _price?: number;
    private _userIds?: string[];

    // private readonly _users: Partial<UserModel[]>;

    get title(): string {
        return this._title;
    }

    // get users(): Partial<UserModel[]> {
    //     return this._users;
    // }

    get description(): string {
        return this._description;
    }

    get price(): number {
        return this._price;
    }

    get userIds(): string[] {
        return this._userIds;
    }
    constructor(course: Partial<CourseModel>) {
        super(course);

        this._title = course.title;
        this._description = course.description;
        this._price = course.price;

        this._userIds = course.userIds;
    }
    public dateConvertor(format: string) {
        // this.createAt = new Date(this.createAt.toLocaleDateString(format));
        // this.updateAt = new Date(this.updateAt.toLocaleDateString(format));
        // this.deleteAt = new Date(this.deleteAt.toLocaleDateString(format));
    }
}