export const getUser = (id) =>
  new Promise((resolve, reject) => {
    const user = users[id];

    if (!user) {
      return setTimeout(() => reject(new Error('User not found')), 250);
    }

    setTimeout(() => resolve(users[id]), 250);
  });
