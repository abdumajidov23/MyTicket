import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Booking } from './models/booking.model';

@ApiTags("Booking")
@Controller("booking")
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: "Create a booking" })
  @ApiResponse({
    status: 201,
    description: "creating a booking",
    type: Booking,
  })
  @Post("create")
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @ApiOperation({ summary: "View all bookings" })
  @ApiResponse({
    status: 200,
    description: "list of all bookings",
    type: [Booking],
  })
  @Get("all")
  findAll() {
    return this.bookingService.findAll();
  }

  @ApiOperation({ summary: "View one booking by id" })
  @ApiResponse({
    status: 200,
    description: "view one booking by id",
    type: Booking,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookingService.findOne(+id);
  }

  @ApiOperation({ summary: "Update the booking by id" })
  @Patch("update/:id")
  update(@Param("id") id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @ApiOperation({ summary: "Delete the booking by id " })
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.bookingService.remove(+id);
  }
}
