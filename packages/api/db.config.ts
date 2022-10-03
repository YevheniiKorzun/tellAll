import { DataSource } from 'typeorm';
import { envPath } from './config';

require('dotenv').config({ path: envPath });

export const database = new DataSource({
    type: 'postgres',
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: Number(process.env.POSTGRES_PORT),
    host: process.env.POSTGRES_HOST,
    entities: [
        __dirname + '/src//entities//*.entity{.ts, .js}'
    ],
    migrations: [
        __dirname + '/src//migrations//*{.ts, .js}'
    ],
    synchronize: false,
    logging: true,
});

database.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });
    