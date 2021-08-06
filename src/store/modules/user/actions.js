export const setUserOnStore = (token, name, email, id) => ({
  type: '@user/LOGIN',
  token,
  name,
  email,
  id,
});
