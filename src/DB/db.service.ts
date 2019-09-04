import { ConfigService } from "../Config/ConfigService";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IdeaEntity } from "../idea/idea.entity";
import { UserEntity } from "../User/user.entity";

export const postgresConnection = [
    TypeOrmModule.forRoot({
        type: 'postgres',
        database: String(new ConfigService().get('DB_NAME')),
        host: String(new ConfigService().get('DB_HOST')),
        port: Number(new ConfigService().get('DB_PORT')),
        username: String(new ConfigService().get('DB_USERNAME')),
        password: String(new ConfigService().get('DB_PASSWORD')),
        entities: [
            IdeaEntity,
            UserEntity
        ],
        synchronize: true,
        logging: true,
        extra: {
            ssl: true
          }
    })
]