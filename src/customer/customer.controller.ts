import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Customer } from './models/customer.model';
import { AdminGuard } from '../guards/admin.guard';

@ApiTags("Customer")
@Controller("customer")
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @UseGuards(AdminGuard)
  @Post("create")
  @ApiOperation({ summary: "Create a new customer" })
  @ApiResponse({
    status: 201,
    description: "The new customer has been successfully created",
    type: Customer,
  })
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @ApiOperation({ summary: "View all customers" })
  @ApiResponse({
    status: 200,
    description: "list of all customers",
    type: [Customer],
  })
  @UseGuards(AdminGuard)
  @Get("all")
  findAll() {
    return this.customerService.findAll();
  }

  @ApiOperation({ summary: "View one customer by id" })
  @ApiResponse({
    status: 200,
    description: "view one customer by id",
    type: Customer,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.customerService.findOne(+id);
  }

  @ApiOperation({ summary: "Update the customer by id" })
  @UseGuards(AdminGuard)
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateCustomerDto: UpdateCustomerDto
  ) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @ApiOperation({ summary: "Delete the customer by id" })
  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.customerService.remove(+id);
  }
}
