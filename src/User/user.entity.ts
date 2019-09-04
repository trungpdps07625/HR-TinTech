import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn 
} from 'typeorm';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid') id: string;

    @CreateDateColumn() created: Date;

    @Column() name: string;

    @Column() email: string;

    @Column() password: string;
}