import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartStatusService } from './cart_status.service';
import { CreateCartStatusDto } from './dto/create-cart_status.dto';
import { UpdateCartStatusDto } from './dto/update-cart_status.dto';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CartStatus } from './models/cart_status.model';


@ApiTags("CartStatus")
@Controller("cart-status")
export class CartStatusController {
  constructor(private readonly cartStatusService: CartStatusService) {}

  @Post("create")
  @ApiOperation({ summary: "Create a new cart_status" })
  @ApiResponse({
    status: 201,
    description: "The new cart_status has been successfully created",
    type: CartStatus,
  })
  create(@Body() createCartStatusDto: CreateCartStatusDto) {
    return this.cartStatusService.create(createCartStatusDto);
  }

  @ApiOperation({ summary: "View all cart_status" })
  @ApiResponse({
    status: 200,
    description: "list of all cart_status",
    type: [CartStatus],
  })
  @Get("all")
  findAll() {
    return this.cartStatusService.findAll();
  }

  @ApiOperation({ summary: "View one cart_status by id" })
  @ApiResponse({
    status: 200,
    description: "view one cart_status by id",
    type: CartStatus,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cartStatusService.findOne(+id);
  }

  @ApiOperation({ summary: "Update the cart_status by id" })
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateCartStatusDto: UpdateCartStatusDto
  ) {
    return this.cartStatusService.update(+id, updateCartStatusDto);
  }

  @ApiOperation({ summary: "Delete the cart_status by id" })
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.cartStatusService.remove(+id);
  }
}
