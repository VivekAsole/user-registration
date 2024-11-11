import React, { useState, useEffect } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:8000/users');
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async (user) => {
    await fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    fetchUsers();
  };

  const handleUpdateUser = async (id, updatedUser) => {
    await fetch(`http://localhost:8000/users/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser),
    });
    fetchUsers();
  };

  const handleDeleteUser = async (id) => {
    await fetch(`http://localhost:8000/users/${id}`, {
      method: 'DELETE'
    });
    fetchUsers();
  };

  return (
    <div className="app-container">
      <h1>User Registration</h1>
      <UserForm onAddUser={handleAddUser} editingUser={editingUser} setEditingUser={setEditingUser} onUpdateUser={handleUpdateUser} />
      <UserList users={users} onEdit={setEditingUser} onDelete={handleDeleteUser} />
    </div>
  );
}

export default App;
