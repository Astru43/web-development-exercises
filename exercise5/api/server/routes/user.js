import { Router as _router } from 'express';
import { DataHolder } from '../data/data';
import { createUserValidatorMw } from '../middleware/SchemaValidators';

const router = _router();
var data = new DataHolder();

// Create a new user.
router.post('/', createUserValidatorMw, (req, res) => {
    var addedUser = data.addUser(req.body);
    res.json(addedUser);
});

// Get all users.
router.get('/', (req, res) => {
    res.json(data.users);
});

export default router;
