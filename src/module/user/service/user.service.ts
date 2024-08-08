// import { Injectable, NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';
import { CreateUserDto } from '../dto/create-user.dto';
// import { UpdateUserDto } from '../dto/update-user.dto';
import { UserMapper } from '../mapper/user.mapper';
import { UserInterface } from '../interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserInterface> {
    const user = UserMapper.fromCreateDtoToEntity(createUserDto);
    const savedUser = await this.userRepository.save(user);
    return UserMapper.fromEntityToInterface(savedUser);
  }

  //   async updateUser(
  //     id: number,
  //     updateUserDto: UpdateUserDto,
  //   ): Promise<UserInterface> {
  //     const user = await this.userRepository.findOne(id);
  //     if (!user) {
  //       throw new NotFoundException(`User with ID ${id} not found`);
  //     }
  //     const updatedUser = UserMapper.fromUpdateDtoToEntity(updateUserDto, user);
  //     const savedUser = await this.userRepository.save(updatedUser);
  //     return UserMapper.fromEntityToInterface(savedUser);
  //   }

  //   async findUserById(id: number): Promise<UserInterface> {
  //     const user = await this.userRepository.findOne(id);
  //     if (!user) {
  //       throw new NotFoundException(`User with ID ${id} not found`);
  //     }
  //     return UserMapper.fromEntityToInterface(user);
  //   }

  //   async findAllUsers(): Promise<UserInterface[]> {
  //     const users = await this.userRepository.find();
  //     return users.map(UserMapper.fromEntityToInterface);
  //   }

  //   async deleteUser(id: number): Promise<void> {
  //     const result = await this.userRepository.delete(id);
  //     if (result.affected === 0) {
  //       throw new NotFoundException(`User with ID ${id} not found`);
  //     }
  //   }
}
