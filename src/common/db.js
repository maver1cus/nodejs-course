const User = require('../resources/users/user.model');
let DB = [];

DB.push(new User(), new User(), new User());

const getAllUsers = async () => DB.slice(0);

const getUser = async id => DB.filter(el => el.id === id)[0];

const createUser = async user => {
  DB.push(user);
  return getUser(user.id);
};

const updateUser = async (id, user) => {
  const oldUser = await getUser(id);
  if (oldUser) {
    DB[DB.indexOf(oldUser)] = { ...user };
    // DB[DB.indexOf(oldUser)].id = id;
  }

  return getUser(id);
};

const removeUser = async id => {
  const user = await getUser(id);
  if (user) {
    const index = DB.indexOf(user);
    DB = [
      ...DB.slice(0, index),
      ...(DB.length > index + 1 ? DB.slice(index + 1) : [])
    ];
  }
  return user;
};

module.exports = { getAllUsers, getUser, createUser, updateUser, removeUser };
