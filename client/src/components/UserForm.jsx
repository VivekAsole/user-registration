import React, { useState, useEffect } from 'react';

function UserForm({ onAddUser, editingUser, setEditingUser, onUpdateUser }) {
  const [formData, setFormData] = useState({ name: '', email: '', dob: '' });

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      onUpdateUser(editingUser.id, formData);
    } else {
      onAddUser(formData);
    }
    setEditingUser(null)
    setFormData({ name: '', email: '', dob: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      <button type="submit">{editingUser ? 'Update' : 'Add'} User</button>
    </form>
  );
}

export default UserForm;
