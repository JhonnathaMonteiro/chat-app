const users = [];

const addUser = ({ id, username, room }) => {
  // clean data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // validate date
  if (!username || !room) {
    return {
      error: "username and room required!",
    };
  }

  // check for duplicate user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });
  if (existingUser) {
    return {
      error: "Username already exist",
    };
  }

  // store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

module.exports = {
  addUser,
  getUser,
  getUsersInRoom,
  removeUser,
};
