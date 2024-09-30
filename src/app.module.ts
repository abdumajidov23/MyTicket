import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { HumanCategory } from "./human_category/models/human_category.model";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { SeatType } from "./seat_type/models/seat_type.model";
import { VenueType } from "./venue_type/models/venue_type.model";
import { VenueTypeModule } from "./venue_type/venue_type.module";
import { VenueModule } from "./venue/venue.module";
import { Venue } from "./venue/models/venue.model";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { VenuePhoto } from "./venue_photo/models/venue_photo.model";
import { RegionModule } from "./region/region.module";
import { DistrictModule } from "./district/district.module";
import { Region } from "./region/models/region.model";
import { SeatModule } from "./seat/seat.module";
import { Seat } from "./seat/models/seat.model";
import { District } from "./district/models/district.model";
import { LanguageModule } from "./language/language.module";
import { Language } from "./language/models/language.model";
import { TicketStatusModule } from "./ticket_status/ticket_status.module";
import { TicketStatus } from "./ticket_status/models/ticket_status.model";
import { CartStatusModule } from "./cart_status/cart_status.module";
import { BookingStatusModule } from "./booking_status/booking_status.module";
import { CartStatus } from "./cart_status/models/cart_status.model";
import { BookingStatus } from "./booking_status/models/booking_status.model";
import { VenueVenueTypeModule } from "./venue_venue_type/venue_venue_type.module";
import { VenueVenueType } from "./venue_venue_type/models/venue_venue_type.model";
import { RolesModule } from "./roles/roles.module";
import { Roles } from "./roles/models/roles.model";
import { UsersModule } from "./users/users.module";
import { User } from "./users/models/user.model";
import { UserRoles } from "./users/models/user-role.model";
import { EventModule } from "./event/event.module";
import { EventTypeModule } from "./event_type/event_type.module";
import { TicketModule } from "./ticket/ticket.module";
import { Ticket } from "./ticket/models/ticket.model";
import { Event } from "./event/models/event.model";
import { EventType } from "./event_type/models/event_type.model";
import { AuthModule } from "./auth/auth.module";
import { CustomerAddressModule } from "./customer_address/customer_address.module";
import { CustomerAddress } from "./customer_address/models/customer_address.model";
import { CustomerModule } from "./customer/customer.module";
import { Customer } from "./customer/models/customer.model";
import { CustomerCardModule } from "./customer_card/customer_card.module";
import { CustomerCard } from "./customer_card/models/customer_card.model";
import { CountryModule } from "./country/country.module";
import { Country } from "./country/models/country.model";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/models/admin.model";
import { FileModule } from './file/file.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "node:path";
import { BookingModule } from './booking/booking.module';
import { CartModule } from './cart/cart.module';
import { Booking } from "./booking/models/booking.model";
import { Cart } from "./cart/models/cart.model";

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,"static"),
    }),
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST || "localhost",
      port: +process.env.POSTGRES_PORT || 3001,
      username: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD || "root2003",
      database: process.env.POSTGRES_DB || "myticket",
      models: [
        HumanCategory,
        SeatType,
        VenueType,
        VenueVenueType,
        Venue,
        VenuePhoto,
        Region,
        Seat,
        District,
        Language,
        TicketStatus,
        CartStatus,
        BookingStatus,
        Roles,
        User,
        UserRoles,
        Ticket,
        Event,
        EventType,
        CustomerCard,
        CustomerAddress,
        Customer,
        Country,
        Admin,
        Booking,
        Cart,
      ],
      logging: false,
      autoLoadModels: true,
      sync: { alter: true },
    }),
    HumanCategoryModule,
    SeatTypeModule,
    VenueTypeModule,
    VenueModule,
    VenuePhotoModule,
    RegionModule,
    DistrictModule,
    SeatModule,
    LanguageModule,
    TicketStatusModule,
    CartStatusModule,
    BookingStatusModule,
    VenueVenueTypeModule,
    RolesModule,
    UsersModule,
    EventModule,
    EventTypeModule,
    TicketModule,
    AuthModule,
    CustomerAddressModule,
    CustomerModule,
    CustomerCardModule,
    CountryModule,
    AdminModule,
    FileModule,
    BookingModule,
    CartModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
