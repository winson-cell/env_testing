import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { ConfigModule } from '@nestjs/config';
import { configuration} from './configs'; // this is new

@Module({
  imports: [
    ConfigModule.forRoot({
      // ensure the environment is trim, because it contain space at the end of string
      envFilePath: `${process.cwd()}/env/${process.env.NODE_ENV.trimEnd()}.env`,
      load: [configuration]
    }), 
    CatsModule],
})

export class AppModule {}