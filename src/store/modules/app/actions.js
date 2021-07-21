/* SNACKBAR */

export const openSnackbar = (message, severity) => {
  return { type: '@app/OPEN_SNACKBAR', message, severity };
};

export const closeSnackbar = (message, severity) => {
  return { type: '@app/OPEN_SNACKBAR' };
};
