import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CoursesModule } from './courses/courses.module';
import { LoggerMiddleware } from './common/middlewares/logger/logger.middleware';
import { UserController } from './user/user.controller';
import { CoursesController } from './courses/courses.controller';

@Module({
  imports: [UserModule, CoursesModule],
  providers: [
    {
      provide: 'APP_NAME',
      useValue: 'NestJS Course Management API',
    }
  ],
  exports: ['APP_NAME'],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(UserController , CoursesController);
  }
}
