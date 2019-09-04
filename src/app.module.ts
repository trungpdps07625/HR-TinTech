import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './DB/db.module';
import { IdeaModule } from './idea/idea.module';
import { UserModule } from './User/user.module';


@Module({
  imports: [DatabaseModule, IdeaModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
