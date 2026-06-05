import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [UserModule, CoursesModule],
  providers: [
    {
      provide: 'APP_NAME',
      useValue: 'NestJS Course Management API',
    }
  ],
})
export class AppModule {}
