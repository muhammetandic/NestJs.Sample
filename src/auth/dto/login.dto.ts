export class LoginDto {
    username: string;
    password: string;
    
    constructor(user: string, pass: string) {
        this.username = user;
        this.password = pass;
    }
}