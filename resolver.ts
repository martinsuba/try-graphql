import { users, cars } from './data';

interface QueryUserParam {
  id: string;
}

export const root = {
  user: ({ id }: QueryUserParam) => {
    const user = users.find(user => user.id === id);
    const userCars = user.cars.flatMap(id => cars.filter(car => car.id === id));

    return {
      ...user,
      cars: userCars,
    }
  },
  allUsers: () => users,
  allCars: () => cars,
};
