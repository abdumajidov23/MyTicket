import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CreateCustomerAddressDto } from './dto/create-customer_address.dto';
import { UpdateCustomerAddressDto } from './dto/update-customer_address.dto';
import { AdminGuard } from '../guards/admin.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerAddress } from './models/customer_address.model';

@ApiTags("CustomerAddress")
@Controller("customer-address")
export class CustomerAddressController {
  constructor(
    private readonly customerAddressService: CustomerAddressService
  ) {}

  @Post("create")
  @ApiOperation({ summary: "Create a customer address" })
  @ApiResponse({
    status: 201,
    description: "The new customer address has been successfully created",
    type: CustomerAddress,
  })
  create(@Body() createCustomerAddressDto: CreateCustomerAddressDto) {
    return this.customerAddressService.create(createCustomerAddressDto);
  }

  @UseGuards(AdminGuard)
  @Get("all")
  @ApiOperation({ summary: "View all customer addresses" })
  @ApiResponse({
    status: 200,
    description: "list of all customer addresses",
    type: [CustomerAddress],
  })
  findAll() {
    return this.customerAddressService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "View one customer address by id" })
  @ApiResponse({
    status: 200,
    description: "view one customer address by id",
    type: CustomerAddress,
  })
  findOne(@Param("id") id: string) {
    return this.customerAddressService.findOne(+id);
  }

  @Patch("update/:id")
  @ApiOperation({ summary: "Update the  customer address  by id" })
  update(
    @Param("id") id: string,
    @Body() updateCustomerAddressDto: UpdateCustomerAddressDto
  ) {
    return this.customerAddressService.update(+id, updateCustomerAddressDto);
  }

  @Delete("delete/:id")
  @ApiOperation({ summary: "Delete the  customer address  by id" })
  remove(@Param("id") id: string) {
    return this.customerAddressService.remove(+id);
  }
}
