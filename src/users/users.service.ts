import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { RolesService } from "../roles/roles.service"; // impport module
import { AddRemoveRoleDto } from "./dto/add-remove-role.dto";
import { ActivateUserDto } from "./dto/activate-user.dto";
import { DeactivateUserDto } from "./dto/deactivate-user.dto copy";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userModel: typeof User,
    private readonly rolesService: RolesService
    // private roleModel: typeof Roles
  ) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create(createUserDto);
    const role = await this.rolesService.findRoleByValue(
      createUserDto.role_value
    );
    if (!role) {
      throw new BadRequestException("Role Not Found");
    }
    // await newUser.$set("roles", [role.id]);
    // await newUser.save();
    newUser.roles = [role];
    // const role1 = await this.roleModel.findOne({
    //   where: { value: createUserDto.role_value.toUpperCase() },
    // });
    return newUser;
  }

  findUserByEmail(email: string) {
    return this.userModel.findOne({
      where: { email },
      include: {
        all: true,
        attributes: ["value"],
        through: { attributes: [] },
      },
    });
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.userModel.findOne({ where: { id }, include: { all: true } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userModel.update(updateUserDto, { where: { id } });
    return this.findOne(id);
  }
  

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) throw new NotFoundException("Foydalanuvchi topilmadi");
    await this.userModel.destroy({ where: { id } });
    return { message: "Foydalanuvchi o'chirildi" };
  }
  

  async removeRole(addRemoveRoleDto: AddRemoveRoleDto) {
    const user = await this.userModel.findByPk(addRemoveRoleDto.userId);
    const role = await this.rolesService.findRoleByValue(
      addRemoveRoleDto.role_value
    );
    if (user && role) {
      await user.$remove("roles", role.id);
      const updatedUser = await this.userModel.findByPk(
        addRemoveRoleDto.userId,
        { include: { all: true } }
      );
      return updatedUser;
    }

    throw new NotFoundException("Foydalanuvchi yoki role topilmadi");
  }

  async addRole(addRemoveRoleDto: AddRemoveRoleDto) {
    const user = await this.userModel.findByPk(addRemoveRoleDto.userId);
    const role = await this.rolesService.findRoleByValue(
      addRemoveRoleDto.role_value
    );
    if (user && role) {
      await user.$add("roles", role.id);
      const updatedUser = await this.userModel.findByPk(
        addRemoveRoleDto.userId,
        { include: { all: true } }
      );
      return updatedUser;
    }

    throw new NotFoundException("Foydalanuvchi yoki role topilmadi");
  }

  async activateUser(activateUserDto: ActivateUserDto) {
    const user = await this.userModel.findByPk(activateUserDto.userId);
    if (user) {
      user.is_active = true;
      await user.save();

      return user;
    }

    throw new NotFoundException("Foydalanuvchi topilmadi");
  }

  async deactivateUser(deactivateUserDto: DeactivateUserDto) {
    const user = await this.userModel.findByPk(deactivateUserDto.userId);
    if (user) {
      user.is_active = false;
      await user.save();

      return user;
    }

    throw new NotFoundException("Foydalanuvchi topilmadi");
  }
}
