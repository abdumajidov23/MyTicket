import { User } from "../../models/user.model";

export const userStub = ():Partial<User>=>{
    return{
        id: 1,
        name: 'alijon',
        email: 'alijon@example.com',
        password: 'alijon123',
        role_value: 'ADMIN',
        is_active: true,
    };
};