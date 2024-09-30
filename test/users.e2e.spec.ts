import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';

describe("User (e2e) test", () => {
  let app: INestApplication;
  let token: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const response = await request(app.getHttpServer())
      .post("/auth/signin")
      .send({
        "login": "aalijan@gmail.com",        // Adminning login (email)
        "hashed_password": "aalijan123" 
      });


    token = response.body.token || response.body.accessToken;

    console.log("Token:", token);

    if (!token) {
      throw new Error("Token olishda muammo!");
    }
  });

  it("/users/all (GET) --> 200 OK", () => {
    return request(app.getHttpServer())
      .get("/users/all")
      .set('Authorization', `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
