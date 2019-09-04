import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    showAllusers(){
        return this.userService.showAll();
    }

    @Post()
    createuser(@Body() data: UserDTO){
        return this.userService.create(data);
    }

    @Get(':id')
    readuser(@Param('id') id: string){
        return this.userService.read(id)
    }

    @Put(':id')
    updateuser(@Param('id') id: string,@Body() data: Partial<UserDTO>){
        return this.userService.update(id, data);
    }

    @Delete(':id')
    destroyuser(@Param('id') id: string){
        return this.userService.destroy(id)
    }
}
