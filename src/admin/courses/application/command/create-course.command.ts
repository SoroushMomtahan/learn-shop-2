export class CreateCourseCommand {
    public readonly title: string;
    public readonly description: string;
    public readonly price?: number;
    public readonly userIds?: string[];
}