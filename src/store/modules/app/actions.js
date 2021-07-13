/* LOGIN */

export const Login = (message, severity) => {
  return { type: '@app/LOGIN', message, severity };
};

/* EDIT DATA */

export const Edit = (message, severity) => {
  return { type: '@app/EDIT', message, severity };
};
