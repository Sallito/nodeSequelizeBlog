const Sequelize = require('sequelize');
const sequelize = new Sequelize('nomeDoBanco','Usuário','Senha',{
    host:'localhost',
    dialect: 'postgres'
})
    sequelize.authenticate().then(()=>{
    console.log('Conectado ao banco de dados.');})
    .catch((err)=>{
    console.log('Erro ao conectar com banco de dados: '+err )
})
module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}

