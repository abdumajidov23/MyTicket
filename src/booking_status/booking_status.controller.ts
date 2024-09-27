import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingStatusService } from './booking_status.service';
import { CreateBookingStatusDto } from './dto/create-booking_status.dto';
import { UpdateBookingStatusDto } from './dto/update-booking_status.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookingStatus } from './models/booking_status.model';

@ApiTags("booking_status")
@Controller("booking-status")
export class BookingStatusController {
  constructor(private readonly bookingStatusService: BookingStatusService) {}

  @Post("create")
  @ApiOperation({ summary: "Create a new booking_status" })
  @ApiResponse({
    status: 201,
    description: "The new booking_status has been successfully created",
    type: BookingStatus,
  })
  @Post("create")
  create(@Body() createBookingStatusDto: CreateBookingStatusDto) {
    return this.bookingStatusService.create(createBookingStatusDto);
  }

  @ApiOperation({ summary: "View all booking_statuses" })
  @ApiResponse({
    status: 200,
    description: "list of all booking_statuses",
    type: [BookingStatus],
  })
  @Get("all")
  findAll() {
    return this.bookingStatusService.findAll();
  }

  @ApiOperation({ summary: "View one booking_status by id" })
  @ApiResponse({
    status: 200,
    description: "view one booking_status by id",
    type: BookingStatus,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookingStatusService.findOne(+id);
  }

  @ApiOperation({ summary: "Update the booking_status by id" })
  @Patch("update/:id")
  update(
    @Param("id") id: string,
    @Body() updateBookingStatusDto: UpdateBookingStatusDto
  ) {
    return this.bookingStatusService.update(+id, updateBookingStatusDto);
  }

  @ApiOperation({ summary: "Delete the booking_status by id" })
  @Delete("delete/:id")
  remove(@Param("id") id: string) {
    return this.bookingStatusService.remove(+id);
  }
}
