import { User } from "../../models/user.model";

export const userStub = ():Partial<User>=>{
    return{
        id: 1,
        name: 'john.doe',
        email: 'john.doe@example.com',
        password: 'password123',
        role_value: 'ADMIN',
        is_active: true,
    };
};