/**
 *
 * @returns  a resolve promise, fakes an API call ( delay response of 2s)
 *
 */
export const fakeAPIcall = {
  getUser: function (data) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => resolve(JSON.stringify({userName: data.userName})),
        2000,
      );
    });
  },
};
