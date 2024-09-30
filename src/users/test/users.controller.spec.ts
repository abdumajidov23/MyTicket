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
                    name: "Alijon",
                    email: "alijonabdumajidov@gmail.com",
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

    describe("findOne user", () => {
        describe("When findOne user", () => {
            let user: User
            beforeAll(async () => {
                user = await userController.findOne("1");
                console.log(user);
            });
            it("then it should get a single user", () => {
                expect(usersService.findOne).toHaveBeenCalledWith(1)
            })
            test("then it shoult call usersService" , ()=>{
                expect(user).toEqual(userStub())
            })
        })
    })

    describe("Remove user", () =>{
        describe("When remove user", () => {
            let message: any
            beforeAll(async () => {
                message = await userController.remove("1");
                console.log(message);
            });
            it("then it should remove a single user", () => {
                expect(usersService.remove).toHaveBeenCalledWith(1)
            })
            test("then it shoult call usersService" , ()=>{
                expect(message).toBe("This action removes a #1 user")
            })
        })
    })

})