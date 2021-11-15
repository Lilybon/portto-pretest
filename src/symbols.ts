import { InjectionKey } from 'vue';
import { User } from './types';

export const UserKey: InjectionKey<User> = Symbol('User'); 