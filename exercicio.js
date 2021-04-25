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
var Exercicio = conexao.define("Exercicio", 
{
    id: {
        type: sequelize.INTEGER,
        primaryKey: true
    }

    ,

    nome_exercicio: {
        type: sequelize.STRING,
        allownull: true
    }

    ,

    alternativas_corretas : {
      type: sequelize.STRING
    }

    ,

    alternativas_incorretas: sequelize.STRING

    , 

    texto_base: sequelize.STRING(1000)

    ,

    texto_comando: sequelize.STRING(1000)

    ,

    nível: sequelize.STRING

    ,

    pontuacao: sequelize.DOUBLE

    ,

    nome_exercicio: sequelize.STRING 
});

var exercicio = {

    create: async function (objeto){
        try {
            let a = await Exercicio.create(objeto)
            console.log(a)
        }
        catch (e){
            throw new Error(name = "Não foi possível adicionar o objeto")
            console.log(e.name)
        }
    }
,
    ler: async function (){
        try{
        let a = await Exercicio.findAll();
        console.log(a);
        }
        catch(e){
            throw new Error(name = "Não foi possível ler o objeto");
            console.log(e.name);
        }
        }
        ,

    atualizar: async function (novonome, id){
        try{
        const usu = await Exercicio.findByPk(id);
        await usu.update({nome:`${novonome}`});
        }
        catch(e){
            throw new Error(name = "Não foi possível atualizar o objeto")
            console.log(e.name)
        }
    }
,
    deletar: async function (id){
        try{
        const object = await Exercicio.findByPk(id);
        let a = await object.destroy();
        console.log(a);
        }
        catch(e){
            throw new Error(name = "Não foi possível deletar o objeto")
            console.log(e.name)
        }
}
}}

module.exports = exercicio;