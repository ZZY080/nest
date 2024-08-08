import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../module/user/entity/user.entity'; // 引入你的实体
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql', // 数据库类型
  host: 'localhost', // 数据库主机
  port: 3306, // MySQL 默认端口号
  username: 'root', // 数据库用户名
  password: 'ZZY806@!.', // 数据库密码
  database: 'largeproject', // 数据库名称
  entities: [User], // 应用程序中使用的实体数组
  synchronize: true, // 是否自动同步数据库结构（仅用于开发环境）
  logging: true, // 启用日志
};
