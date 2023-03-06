import { Injectable } from '@nestjs/common';

export type User = {
    id: number,
    username: string,
    password: string,
}

@Injectable()
export class UserService {
    private readonly users: User[] = [
        {
            id: 1,
            username: "mandic",
            password: "1234"
        },
        {
            id: 2,
            username: "bahar",
            password: "2345"
        },
    ];
    
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user=>user.username === username);
    }
}
