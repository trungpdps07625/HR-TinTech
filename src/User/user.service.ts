import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
    ){}

    async showAll(){
        return await this.userRepository.find();
    }

    async create(data: UserDTO){
        const user = await this.userRepository.create(data);
        await this.userRepository.save(user);
        return user;
    }

    async read(id: string){
        return await this.userRepository.findOne({ where: { id }});
    }

    async update(id: string, data: Partial<UserDTO>){
        await this.userRepository.update({id}, data);
        return await this.userRepository.findOne({id});
    }

    async destroy(id: string){
        await this.userRepository.delete({id});
        return {deleted: true};
    }
}
