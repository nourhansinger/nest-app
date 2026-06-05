import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  private users = [
    { id: 1, firstName: 'Nourhan', lastName: 'Singer', age: 23, email: 'nourhan.singer@gmail.com', password: '123', courseIds: [1, 2] },
    { id: 2, firstName: 'Ali', lastName: 'Ahmed', age: 25, email: 'ali.ahmed@gmail.com', password: '345', courseIds: [1] },
    { id: 3, firstName: 'Laila', lastName: 'Mohamed', age: 35, email: 'laila.mohamed@gmail.com', password: '567', courseIds: [2] }
  ];

    create(createUserDto: CreateUserDto) {

      const emailExists = this.users.find(user => user.email === createUserDto.email);
      if (emailExists) {
        return `User already exists`;
      }
      const newUser = {
        id:this.users.length + 1,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        age: createUserDto.age, 
        email: createUserDto.email,
        password: createUserDto.password,
        courseIds: createUserDto.courseIds,
      }
      this.users.push(newUser);
      return newUser;
      }
  
      
    findAll() {
      return this.users;
    }
  
    findOne(id: number) {
      return this.users.find(user => user.id === id);
    }
  
    update(id: number, updateUserDto: UpdateUserDto) {
      const foundUser = this.users.find(user => user.id === id);
      if (foundUser) {
        const updatedUser = { ...foundUser, ...updateUserDto };
        const index = this.users.findIndex(user => user.id === id);
        this.users[index] = updatedUser;
        return 'User updated successfully';
      }
    }
  
    remove(id: number) {
    const foundUser = this.users.find(user => user.id === id);
    if (foundUser) {
      this.users = this.users.filter(user => user.id !== id);
      return 'User removed successfully';
    }
}

}