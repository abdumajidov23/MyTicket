import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, UploadedFile } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { AdminGuard } from '../guards/admin.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Event } from './models/event.model';
import { Seat } from '../seat/models/seat.model';

@ApiTags("Event")
@Controller("event")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @UseGuards(AdminGuard)
  @Post("create")
  @ApiOperation({ summary: "Create a new event" })
  @ApiResponse({
    status: 201,
    description: "The new event has been successfully created",
    type: Event,
  })
  @UseInterceptors(FileInterceptor("photo"))
  create(@Body() createEventDto: CreateEventDto, @UploadedFile() photo: any) {
    return this.eventService.create(createEventDto, photo);
  }

  @Get("all")
  @ApiOperation({ summary: "Get all events" })
  @ApiResponse({
    status: 200,
    description: "List of all events",
    type: [Event],
  })
  findAll() {
    return this.eventService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get one event by id" })
  findOne(@Param("id") id: string) {
    return this.eventService.findOne(+id);
  }

  @Get("sold/:id")
  @ApiOperation({ summary: "Get sold seats of an event by id" })
  @ApiResponse({
    status: 200,
    description: "List of sold seats for an event",
    type: [Seat],
  })
  getSoldSeats(@Param("id") id: string) {
    return this.eventService.getSoldSeats(+id);
  }

  @UseGuards(AdminGuard)
  @Patch("update/:id")
  @ApiOperation({ summary: "Update an event by id" })
  @ApiResponse({
    status: 200,
    description: "The event has been successfully updated",
    type: Event,
  })
  update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @UseGuards(AdminGuard)
  @Delete("delete/:id")
  @ApiOperation({ summary: "Delete an event by id" })
  @ApiResponse({
    status: 200,
    description: "The event has been successfully deleted",
  })
  remove(@Param("id") id: string) {
    return this.eventService.remove(+id);
  }
}
