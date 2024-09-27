import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "src/users/users.module";
import { AdminModule } from "src/admin/admin.module";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "MySecretKey",
      signOptions: { expiresIn: "1h" },
    }),AdminModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
