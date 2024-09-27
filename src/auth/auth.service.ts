import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { SignInDto } from "./dto/signIn.dto";
import { AdminService } from "../admin/admin.service";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";
import { Admin } from "../admin/models/admin.model";

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService
  ) {}

  async signUp(createAdminDto: CreateAdminDto) {
    const candidate = await this.adminService.findAdminByEmail(
      createAdminDto.login
    );
    if (candidate) {
      throw new BadRequestException("Bunday admin mavjud!");
    }

    const hashedPassword = await bcrypt.hash(createAdminDto.hashed_password, 3);
    const newAdmin = await this.adminService.create({
      ...createAdminDto,
      hashed_password: hashedPassword,
    });
    return this.generateToken(newAdmin);
  }

  async generateToken(admin: Admin) {
    const payload = {
      sub: admin.id,
      login: admin.login,
      is_creator: admin.is_creator,
    };

    return this.jwtService.sign(payload);
  }

  async signIn(signInDto: SignInDto) {
    const admin = await this.adminService.findAdminByEmail(signInDto.login);
    if (!admin) {
      throw new UnauthorizedException("Admin not found");
    }

    const validPassword = await bcrypt.compare(
      signInDto.hashed_password,
      admin.hashed_password
    );

    if (!validPassword) {
      throw new UnauthorizedException("Admin not found");
    }
    return this.generateToken(admin);
  }
}
