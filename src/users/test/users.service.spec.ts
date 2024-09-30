import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "../users.service";
import { userStub } from "./stubs/user.stub";
import { JwtService } from "@nestjs/jwt";
import { RolesService } from "../../roles/roles.service";
import { getModelToken } from "@nestjs/sequelize";
import { Roles } from "../../decorator/roles-auth.decorator";
import { User } from "../models/user.model";
import { CreateUserDto } from "../dto/create-user.dto";

describe("User service", () => {
  let usersService: UsersService;
  const mockUsersModel = {
    create: jest.fn().mockImplementation(userStub),
    findOne: jest.fn().mockImplementation(userStub),
    findAll: jest.fn().mockImplementation(() => [userStub()]),
    findByPk: jest.fn().mockImplementation(userStub),
    update: jest.fn().mockResolvedValue([1]), // 1 if update is successful
    destroy: jest.fn(),
  };
  const mockRolesModel = {
    findOne: jest.fn().mockImplementation((value: string) => "USER"),
  };
  beforeAll(async () => {
    const modulRef: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        UsersService,
        JwtService,
        RolesService,
        {
          provide: getModelToken(User),
          useValue: mockUsersModel,
        },
        {
          provide: getModelToken(Roles),
          useValue: mockRolesModel,
        },
      ],
    }).compile();
    usersService = modulRef.get<UsersService>(UsersService);
  });
  it("should be defined", () => {
    expect(usersService).toBeDefined();
  });

  describe("createUser", () => {
    describe("when create User is called", () => {
      let createUserDto: CreateUserDto;
      let newUser: User;
      beforeEach(async () => {
        createUserDto = {
          name: userStub().name,
          email: userStub().email,
          password: userStub().password,
          role_value: userStub().role_value,
        };
        newUser = await usersService.create(createUserDto);
        console.log(newUser);
      });
      it("should be create new user", async () => {
        expect(newUser).toMatchObject({
          ...userStub(),
          roles: ["USER"],
        });
      });
    });
  });

  describe("getOneUser", () => {
    describe("when getOneUser is called", () => {
        test("then it should call usersService", async () => {
            expect(await usersService.findOne(userStub().id)).toEqual(userStub());
        });
    });
  });

  describe("getAllUsers", () => {
    describe("when getAllUsers is called", () => {
        test("then it should call usersService", async () => {
            expect(await usersService.findAll()).toEqual([userStub()]);
        });
    });
  });


  describe("updateUser", () => {
    describe("when updateUser is called", () => {
      test("then it should call usersService", async () => {
        const updatedUser = await usersService.update(userStub().id, userStub());
        expect(mockUsersModel.update).toHaveBeenCalledWith(userStub(), { where: { id: userStub().id } });
        expect(updatedUser).toEqual(userStub());
      });
    });
  });
  


});