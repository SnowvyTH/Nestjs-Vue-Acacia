import { Controller, Get, HttpCode, Version } from '@nestjs/common';
import { UtilsService } from 'src/shared/utils/utils.service';

@Controller({
    version: '1',
    path: 'customers',
})

export class CustomersController {
    constructor(private readonly utilsService: UtilsService) {}

    // localhost:port/v1/customers/getdate
    @Get('getdate')
    @HttpCode(200)
    getServerDate() {
        return this.utilsService.getServerDate();
    }

    // localhost:port/v1/customers
    @Get()
    @HttpCode(200)
    findALl() {
        return 'findAll Customers'
    }

    // localhost:port/v2/customers
    @Version('2')
    @Get()
    @HttpCode(200)
    findAllV2() {
        return 'findAll Customers v2'
    }

}
