export class User {
    _id?: string;
    name?: string;
    username?: string;
    password?: string;
    created?: Date;
    resetPasswordToken?: string;
    resetPasswordExpires?: Date;
}