const bcrypt = require('bcrypt');

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

async function validatePassword(normalPassword, hashedPassword) {
    return await bcrypt.compare(normalPassword, hashedPassword);
}