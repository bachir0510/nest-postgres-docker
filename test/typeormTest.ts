// import { Module } from "@nestjs/common";
// import { ConfigModule, ConfigService } from "@nestjs/config";
// import { TypeOrmModule } from "@nestjs/typeorm";

// @Module({
//     imports:[
//         TypeOrmModule.forRootAsync({
//             imports: [ConfigModule],
//             inject: [ConfigService],
//             useFactory: async (configService: ConfigService) => {
//               return {
//                 type: 'postgres',
//                 host: 'localhost',
//                 port: 5432,
//                 username: 'postgres',
//                 password: 'postgres',
//                 database: 'postgres',
//                 autoLoadEntities: true,
//                 synchronize: true,
//               };
//             },
//           }),

    
//     ]
// })
// export class TypOrmTestModule {}