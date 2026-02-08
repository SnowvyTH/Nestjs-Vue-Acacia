import { Controller, Get, HttpCode, Version } from '@nestjs/common';

@Controller({
    version: '1',
    path: 'customers',
})

export class CustomersController {

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
