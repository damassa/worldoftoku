export const setUserOnStore = (token, name, email, id) => ({
  type: '@user/LOGIN',
  token,
  name,
  email,
  id,
});

export const updateUserOnStore = (name, email) => ({
  type: '@user/UPDATE',
  name,
  email,
});
