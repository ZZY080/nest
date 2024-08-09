import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entity/user.entity';
import { UserInterface } from '../interface/user.interface';

export class UserMapper {
  // 将创建用户的 DTO 转换为用户实体
  static fromCreateDtoToEntity(createUserDto: CreateUserDto): User {
    const user = new User();
    user.username = createUserDto.username;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return user;
  }

  // 将更新用户的 DTO 转换为用户实体
  static fromUpdateDtoToEntity(
    updateUserDto: UpdateUserDto,
    existingUser: User,
  ): User {
    existingUser.username = updateUserDto.username || existingUser.username;
    existingUser.password = updateUserDto.password || existingUser.password;
    return existingUser;
  }

  // 将用户实体转换为用户接口
  static fromEntityToInterface(user: User): UserInterface {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      isActive: user.isActive,
    };
  }
}
