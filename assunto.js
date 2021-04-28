let sequelize = require("sequelize");
let conexao = new sequelize (
    "postgres://mmsnfenjipqnzn:3a82a762e42943036f84b09967773de507c33cc817ed501d84ba63d8b1c4c7cb@ec2-54-145-102-149.compute-1.amazonaws.com:5432/dej7r2539euilt",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
            rejectUnauthorized: false
            }
        },
        define: {

                freezeTableName: true

        }
    }
);
var Assunto = conexao.define("Assunto", 
{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    }

    ,

    nome: {
        type: sequelize.STRING,
        allownull: true
    }
})


var assunto = {

    create: async function (objeto){
try{
    let assunt = await Assunto.create(objeto);
    console.log(assunt);
    }
catch(e){
    throw new error (name = "Erro ao adicionar")
    console.log(e.name)
  }
}
,
        let: async function (){
 try{
    let assunt = await Assunto.findAll();

        console.log(assunt);
        }
        catch (e){
    throw new error (name= "ERRO NA LEITURA");
console.log(e.name);
}
}
,

    atualizar: async function (atualizar_o_nome, id){
try{
const pessoa = await Assunto.findByPk(id);
        await novo.update({nome:`${atualizar_o_nome}`});
    }
catch (e){
     throw new error (name = "ERRO AO ATUALIZAR")
     console.log(e.name)
}
}
,
    deletar: async function (id){
try{
        const object = await Assunto.findByPk(id);
        let assunt = await object.destroy();
        console.log(assunt);
}
catch (e){
 throw new error (name = "ERRO AO DELETAR")
 console.log(e.name)
      }
   }
}

module.exports = assunto;