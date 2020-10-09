const DB = require('../../common/db');

const getAll = async () => DB.getAllUsers();

const get = async id => {
  const user = await DB.getUser(id);

  if (!user) {
    throw new Error('Not Found');
  }
  return user;
};

const create = async user => DB.createUser(user);

const update = async (id, user) => {
  const userUpdate = DB.updateUser(id, user);
  if (!userUpdate) {
    throw new Error('Not Found');
  }
  return userUpdate;
};

const remove = async id => DB.removeUser(id);

module.exports = { getAll, get, create, update, remove };
