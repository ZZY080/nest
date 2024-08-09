import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // 自定义的查询方法可以在这里添加
  findByEmail(email: string): Promise<User | undefined> {
    return this.findOne({ where: { email } });
  }
}
