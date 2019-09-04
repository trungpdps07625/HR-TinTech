import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn 
} from 'typeorm';

@Entity('idea')
export class IdeaEntity {
    @PrimaryGeneratedColumn('uuid') id: string;

    @CreateDateColumn() created: Date;

    @Column() idea: string;

    @Column() description: string;
}