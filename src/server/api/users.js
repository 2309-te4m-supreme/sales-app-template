const express = require('express')
const usersRouter = express.Router();
const { requireAdmin } = require("./utils")

const {
    createUser,
    getUser,
    getUserByEmail,
    getAllUsers,
    getUserById,
    updateUser,
} = require('../db');

const { requireUser } = require('./utils');
const jwt = require('jsonwebtoken')

// GET /api/users
usersRouter.get('/', requireAdmin, async (req, res, next) => {
    try {
        const users = await getAllUsers();

        res.send({
            users
        });
    } catch ({ name, message }) {
        next({ name, message })
    }
});

// GET /api/users/me
usersRouter.get('/me', requireUser, async (req, res, next) => {
    try {
      res.send(req.user);
    } catch (error) {
      next(error)
    }
})  

// GET /api/users/:userId
usersRouter.get('/:userId', requireAdmin, async (req, res, next) => {
    try {
        const user = await getUserById(req.params.userId);

        res.send({
            user
        });
    } catch ({ name, message }) {
        next({ name, message })
    }
})


// POST /api/users/login //TODO Fix Email Case Sensitivity Success
usersRouter.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        next({
            name: 'MissingCredentialsError',
            message: 'Please supply both an email and password'
        });
    
    }
    
        try {
            const user = await getUser({ email, password });
                
                if (user) {
                    const token = jwt.sign({
                        id: user.id,
                        email
                    }, process.env.JWT_SECRET, {
                        expiresIn: '1w'
                    });
        
                    res.send({
                        message: 'Login successful!',
                        token
                    });
                }
        
                else {
                    next({
                        name: 'IncorrectCredentialsError',
                        message: 'Username or password is incorrect'
                    });
                }
            } catch (err) {
                next(err);
            }
    

    
});

// POST /api/users/register
usersRouter.post('/register', async (req, res, next) => {
    const { user_id, username, first_name, last_name, email, password, address, phone_number } = req.body;

    try {
        const _user = await getUserByEmail(email);

        if (_user) {
            next({
                name: 'UserExistsError',
                message: 'A user with that email already exists'
            });
        }

        const user = await createUser({
            user_id,
            permissions: 'user',
            username,
            email,
            password,
            first_name,
            last_name,
            address,
            phone_number
        });

        const token = jwt.sign({
            id: user.user_id,
            email
        }, process.env.JWT_SECRET, {
            expiresIn: '1w'
        });

        res.send({
            message: 'Sign up successful!',
            token
        });
    } catch ({ name, message }) {
        next({ name, message })
    }
})

// TODO Update User (Admin) Success
usersRouter.put('/:userId', requireAdmin, async (req, res, next) => {

    try { 
      // ⬇ ⬇ ⬇This piece of code isn't responsive, but keeping it to edit later ⬇ ⬇ ⬇
    const existingUser = getUserById(req.params.userId);

    if (!existingUser) return res.status(404).json({message:"This user does not exist"})
      // ⬆ ⬆ ⬆ This piece of code isn't responsive, but keeping it to edit later ⬆ ⬆ ⬆ 
    

    const { permissions, username, email, password, first_name, last_name, address, phone_number } = req.body

   const user = await updateUser({id:req.params.userId, 
    permissions,
    username, 
    email,
    password,
    first_name,
    last_name,
    address,
    phone_number })


   res.send(user)
      
    } catch ({name, message}) {
      next({name, message})
    }
  
})

module.exports = usersRouter;