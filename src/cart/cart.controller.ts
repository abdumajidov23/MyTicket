import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cart } from './models/cart.model';

@ApiTags("Cart")
@Controller("cart")
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: "Create a new cart" })
  @ApiResponse({
    status: 201,
    description: "The new cart has been successfully created",
    type: Cart,
  })
  @Post("create")
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @ApiOperation({ summary: "View all carts" })
  @ApiResponse({
    status: 200,
    description: "list of all carts",
    type: [Cart],
  })
  @Get("all")
  findAll() {
    return this.cartService.findAll();
  }

  @ApiOperation({ summary: "View one cart by id" })
  @ApiResponse({
    status: 200,
    description: "view one cart by id",
    type: Cart,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.cartService.findOne(+id);
  }

  @ApiOperation({ summary: "Update the cart by id" })
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @ApiOperation({ summary: "Delete the cart by id" })
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.cartService.remove(+id);
  }
}
