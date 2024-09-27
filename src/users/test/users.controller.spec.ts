// import Test from "supertest/lib/test"
// import { Controller } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import { UsersController } from "../users.controller"
import { UsersService } from "../users.service"
import { Test } from "@nestjs/testing"
import { User } from "../models/user.model"
import { CreateUserDto } from "../dto/create-user.dto"
import { userStub } from "./stubs/user.stub"

jest.mock("../users.service")

describe("users controller", () => {
    let userController: UsersController
    let usersService: UsersService

    beforeAll(async () => {
        const modelRef = await Test.createTestingModule({
            controllers: [UsersController],
            providers: [UsersService, JwtService],
        }).compile();

        userController = modelRef.get<UsersController>(UsersController);
        usersService = modelRef.get<UsersService>(UsersService);
    })

    it("Users Controller should be define", () => {
        expect(userController).toBeDefined()
    })
    it("Users Service should be define", () => {
        expect(usersService).toBeDefined()
    })

    describe("create users", () => {
        describe("when creating users", () => {
            let user:User
            let createUserDto:CreateUserDto;
            beforeAll(async () => {
                createUserDto = {
                    name: "John Doe",
                    email: "john.doe@example.com",
                    password: "secret",
                    role_value: "admin",
                };
                user = await userController.create(createUserDto);
                console.log(user);
            });
            it("should create a user", () => {
                expect(usersService.create).toHaveBeenCalledWith(createUserDto)
            })
            test("then it shoult call usersService" , ()=>{
                expect(user).toEqual(userStub())
            })
        })
    })

    describe("findAll users", () => {
        describe("When findAll users", () => {
            let users: User[]
            beforeAll(async () => {
                users = await userController.findAll();
                console.log(users);
            });
            it("then it should get all users", () => {
                expect(usersService.findAll).toHaveBeenCalled()
            })
            test("then it shoult call usersService" , ()=>{
                expect(users).toEqual([userStub()])
            })
        })
    })
})