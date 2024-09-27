import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddRemoveRoleDto } from './dto/add-remove-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';
import { DeactivateUserDto } from './dto/deactivate-user.dto copy';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { SelfGuard } from '../guards/self.guard';
import { Roles } from '../decorator/roles-auth.decorator';
import { RolesGuard } from '../guards/roles.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './models/user.model';


@ApiTags("Users")
@Roles("ADMIN", "SUPERADMIN")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("create")
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: "View all users" })
  @ApiResponse({
    status: 200,
    description: "list of all users",
    type: [User],
  })
  @UseGuards(JwtAuthGuard)
  @Get("all")
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: "View one user by id" })
  @ApiResponse({
    status: 200,
    description: "view one user by id",
    type: User,
  })
  @UseGuards(SelfGuard)
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }

  @Roles("ADMIN", "SUPERADMIN")
  @UseGuards(RolesGuard)
  @HttpCode(200)
  @Post("add_role")
  addRole(@Body() addRemoveRoleDto: AddRemoveRoleDto) {
    return this.usersService.addRole(addRemoveRoleDto);
  }

  @Roles("SUPERADMIN")
  @UseGuards(RolesGuard)
  @HttpCode(200)
  @Post("remove_role")
  removeRole(@Body() addRemoveRoleDto: AddRemoveRoleDto) {
    return this.usersService.removeRole(addRemoveRoleDto);
  }

  @HttpCode(200)
  @Post("activate")
  activateUser(@Body() activateUserDto: ActivateUserDto) {
    return this.usersService.activateUser(activateUserDto);
  }

  @HttpCode(200)
  @Post("deactivate")
  deactivateUser(@Body() deactivateUserDto: DeactivateUserDto) {
    return this.usersService.activateUser(deactivateUserDto);
  }
}
