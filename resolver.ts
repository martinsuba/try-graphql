import { users } from './data';

export const root = {
  user: () => users[0],
  allUsers: () => users
};
