import { userStub } from "../test/stubs/user.stub";


export const UsersService = jest.fn().mockReturnValue({
    create: jest.fn().mockReturnValue(userStub()),
    findAll: jest.fn().mockReturnValue([userStub()]),
    findOne: jest.fn().mockReturnValue(userStub()),
    update: jest.fn().mockReturnValue({message : "foydalanuvchi o'chirildi"}),
    remove: jest.fn().mockReturnValue("This action removes a #1 user"),
    removeRole: jest.fn().mockResolvedValue(userStub()),
    addRole: jest.fn().mockResolvedValue(userStub()),
})