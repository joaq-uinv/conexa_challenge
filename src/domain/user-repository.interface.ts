import { User } from './user';

export interface UserRepository {
  save(user: User): Promise<void>;

  findById(id: string): Promise<User>;

  findAll(criteria: any): Promise<User[]>;
}
