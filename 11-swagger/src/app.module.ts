import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from '@nestjs/config';
import { configuration, ENV } from './configs'; // this is new

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/env/${ENV}.env`,
      load: [configuration]
    }), 
    CatsModule],
})

export class AppModule {}