import { request } from 'graphql-request'

async function init() {
  const userCarsQuery = `{
    user(id: "2") {
      cars {
        id
        name
      }
    }
  }`;

  const allUsersQuery = `{
    allUsers {
      name
      age
      cars {
        name
      }
    }
  }`;

  const result = await request('http://localhost:4000/graphql', userCarsQuery)

  console.log(JSON.stringify(result));
}

(async () => {
  try {
    await init();
  } catch (err) {
    console.error(err);
  }
})();

