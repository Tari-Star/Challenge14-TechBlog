const { User } = require('../models');

const userData = [
    {
        username: 'Josef',
        email: 'pass456',
        password: 'pass456'
    },
    {
        username: 'Josefina',
        email: 'josefina@gmail.com',
        password: 'pass456'
    },
    {
        username: 'Larry',
        email: 'larry@gmail.com',
        password: 'pass456'
    },
    {
        username: 'Nick',
        email: 'nick@gmail.com',
        password: 'pass456'
    },
    {
        username: 'Alissa',
        email: 'alissa@gmail.com',
        password: 'pass456'
    }
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;