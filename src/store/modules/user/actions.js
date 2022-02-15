export const setUserOnStore = (token, name, email, id, favorites) => ({
  type: '@user/LOGIN',
  token,
  name,
  email,
  id,
  favorites,
});

export const updateUserOnStore = (name, email) => ({
  type: '@user/UPDATE',
  name,
  email,
});

export const clearUserOnStore = () => ({
  type: '@user/LOGOUT',
});

export const setFavorites = (favorites) => ({
  type: '@user/SET_FAVORITES',
  favorites,
});
