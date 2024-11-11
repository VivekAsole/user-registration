import express from 'express';
import cors from 'cors';
import userController from './controllers/userController.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/users', userController.getUsers);
app.post('/users', userController.addUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
