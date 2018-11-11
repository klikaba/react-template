function capitalizeFirstLetter(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

export function parseResponseErrors(errors) {
  const err = [];

  Object.keys(errors).forEach((e) => {
    errors[e].forEach((er) => {
      err.push(`${capitalizeFirstLetter(e)} ${er}`);
    });
  });

  return err;
}

export default {
  capitalizeFirstLetter,
  parseResponseErrors,
};
