const validationUserCreated = (user) => {
  if (user) {
    const e = new Error('User already registered');
    e.status = 409;
    throw e;
  }
};

module.exports = {
  validationUserCreated,
};