import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerCardService } from './customer_card.service';
import { CreateCustomerCardDto } from './dto/create-customer_card.dto';
import { UpdateCustomerCardDto } from './dto/update-customer_card.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerCard } from './models/customer_card.model';

@ApiTags("CustomerCard")
@Controller("customer-card")
export class CustomerCardController {
  constructor(private readonly customerCardService: CustomerCardService) {}

  @Post("create")
  @ApiOperation({ summary: "Create a new customer-card" })
  @ApiResponse({
    status: 201,
    description: "The new customer-card has been successfully created",
    type: CustomerCard,
  })
  create(@Body() createCustomerCardDto: CreateCustomerCardDto) {
    return this.customerCardService.create(createCustomerCardDto);
  }

  @Get("all")
  @ApiOperation({ summary: "Get all customer-cards" })
  @ApiResponse({
    status: 200,
    description: "List of all customer-cards",
    type: [CustomerCard],
  })
  findAll() {
    return this.customerCardService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a single customer-card by id" })
  @ApiResponse({
    status: 200,
    description: "Customer-card details",
    type: CustomerCard,
  })
  findOne(@Param("id") id: string) {
    return this.customerCardService.findOne(+id);
  }

  @Patch("update/:id")
  @ApiOperation({ summary: "Update a customer-card by id" })
  @ApiResponse({
    status: 200,
    description: "Customer-card updates",
    type: CustomerCard,
  })
  update(
    @Param("id") id: string,
    @Body() updateCustomerCardDto: UpdateCustomerCardDto
  ) {
    return this.customerCardService.update(+id, updateCustomerCardDto);
  }

  @Delete("delete/:id")
  @ApiOperation({ summary: "Delete a customer-card by id" })
  @ApiResponse({
    status: 200,
    description: "Customer-card deletes",
  })
  remove(@Param("id") id: string) {
    return this.customerCardService.remove(+id);
  }
}
