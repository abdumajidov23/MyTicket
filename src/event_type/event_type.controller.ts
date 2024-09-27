import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EventType } from './models/event_type.model';

@ApiTags("EventType")
@Controller("event-type")
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @Post("create")
  @ApiOperation({ summary: "Create a new event_type" })
  @ApiResponse({
    status: 201,
    description: "Created a new event_type",
    type: EventType,
  })
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @Get("all")
  @ApiOperation({ summary: "Get all event_types" })
  @ApiResponse({
    status: 200,
    description: "List of all event_types",
    type: [EventType],
  })
  findAll() {
    return this.eventTypeService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a single event_type by id" })
  @ApiResponse({
    status: 200,
    description: "Get a single event_type by id",
    type: EventType,
  })
  findOne(@Param("id") id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @Patch("update/:id")
  @ApiOperation({ summary: "Update an event_type by id" })
  @ApiResponse({
    status: 200,
    description: "Updated an event_type by id",
    type: EventType,
  })
  update(
    @Param("id") id: string,
    @Body() updateEventTypeDto: UpdateEventTypeDto
  ) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @Delete("delete/:id")
  @ApiOperation({ summary: "Delete an event_type by id" })
  @ApiResponse({
    status: 200,
    description: "Deleted an event_type by id",
    type: EventType,
  })
  remove(@Param("id") id: string) {
    return this.eventTypeService.remove(+id);
  }
}
