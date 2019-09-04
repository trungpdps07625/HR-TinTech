import { postgresConnection } from './db.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        ...postgresConnection
    ],
    exports: [
        ...postgresConnection
    ]
})
export class DatabaseModule { }