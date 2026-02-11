import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { GlobalHelpersModule } from './shared/global-helpers/global-helpers.module';
import { UtilsModule } from './shared/utils/utils.module';
import { CategoriesModule } from './categories/categories.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './shared/db/prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot(), CustomersModule, GlobalHelpersModule, UtilsModule, CategoriesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService, GlobalHelpersModule],
})
export class AppModule {}
