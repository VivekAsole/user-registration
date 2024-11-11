import fs from 'fs';
import path from 'path';

const filePath = path.resolve('data/users.json');

const readUsers = () => JSON.parse(fs.readFileSync(filePath, 'utf8'));
const writeUsers = (data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

// Get all users
export const getUsers = (req, res) => {
  const users = readUsers();
  res.json(users);
};

// Add a new user
export const addUser = (req, res) => {
  const users = readUsers();
  const newUser = { id: Date.now().toString(), ...req.body };
  users.push(newUser);
  writeUsers(users);
  res.status(201).json(newUser);
};

// Update an existing user
export const updateUser = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  const users = readUsers();
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedData };
    writeUsers(users);
    res.json(users[index]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

// Delete a user
export const deleteUser = (req, res) => {
  const { id } = req.params;
  let users = readUsers();
  users = users.filter((user) => user.id !== id);
  writeUsers(users);
  res.status(204).end();
};

export default { getUsers, addUser, updateUser, deleteUser };
