const validationEmailAndPassword = ({ email, password }) => {
  if (!email || !password) {
    const e = new Error('Some required fields are missing');
    e.status = 400;
    throw e;
  }
};

const validationUserExists = (user) => {
  if (!user) {
    const e = new Error('Invalid fields');
    e.status = 400;
    throw e;
  }
};

module.exports = {
  validationEmailAndPassword,
  validationUserExists,
};