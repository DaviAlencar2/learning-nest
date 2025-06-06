import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  throwNotFound() {
    throw new NotFoundException('Usuário não encontrado!');
  }

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = this.usersRepository.create({
        name: createUserDto.name,
        email: createUserDto.email,
        passwordHash: createUserDto.password,
      });
      return await this.usersRepository.save(newUser);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email já cadastrado!');
      } else {
        throw error;
      }
    }
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({
      where: { id },
      select: ['id', 'name', 'email'],
    });
    if (user) return user;
    this.throwNotFound();
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  async remove(id: number) {
    const user = await this.usersRepository.findOneBy({
      id: id,
    });

    if (!user) {
      this.throwNotFound();
    } else {
      await this.usersRepository.remove(user);
      return `Usuário com email ${user.email} deletado.`;
    }
  }
}
