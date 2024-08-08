import {
  Controller,
  //   Get,
  Post,
  Body,
  //   Param,
  //   Patch,
  //   Delete,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/create-user.dto';
// import { UpdateUserDto } from '../dto/update-user.dto';
import { UserInterface } from '../interface/user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserInterface> {
    return this.userService.createUser(createUserDto);
  }

  //   @Get(':id')
  //   async findOne(@Param('id') id: number): Promise<UserInterface> {
  //     return this.user;
  //   }
}
