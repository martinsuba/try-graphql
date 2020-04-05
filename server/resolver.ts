import { users, cars } from './data';
import { User, Car, QueryUserParam } from './interfaces';

function getUserCars(user: User): Car[] {
  const carMap = {};
  for (const car of cars) {
    carMap[car.id] = car.name;
  }

  return user.cars.map(id => ({
    id,
    name: carMap[id]
  }));
}

export const root = {
  user: ({ id }: QueryUserParam) => {
    const user = users.find(user => user.id === id);
    const userCars = getUserCars(user);

    return {
      ...user,
      cars: userCars,
    };
  },
  allUsers: () => {
    return users.map(user => {
      const cars = getUserCars(user);

      return {
        ...user,
        cars,
      };
    });
  },
  allCars: () => cars,
};
