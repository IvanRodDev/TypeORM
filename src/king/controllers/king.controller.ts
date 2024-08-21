import { Controller, Get } from '@nestjs/common';

@Controller('king')
export class KingController {

    @Get()
    sayNothing(){
        return 'Hola';
    }

}
