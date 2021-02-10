const db = require('./db');
const ddb = require('./db');
const User = db.sequelize.define('usuarios',{
    nome: {
        type: db.sequelize.STRING
    },
    sobrenome:{
        type: db.sequelize.STRING
    },
    idade:{
        type:db.sequelize.INTEGER
    }
});

module.exports = User;