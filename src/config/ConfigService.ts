import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
    private readonly envConfig: { [key: string]: string | number };

    constructor() {
        this.envConfig = dotenv.parse(fs.readFileSync('development.env'));
    }

    get(key: string): string | number {
        return this.envConfig[key];
    }
}