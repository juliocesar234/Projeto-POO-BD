let sequelize = require("sequelize");

let conexao = new sequelize (
    "",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
            rejectUnauthorized: false
            }
        }
    }
);
var Disciplina = conexao.define("Disciplina", 
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

    ,

    area_de_conhecimento : {
      type: sequelize.STRING
    }

    ,

    quantidade: sequelize.INTEGER
    
    ,


});

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

    texto_base: sequelize.STRING

    ,

    texto_comando: sequelize.STRING

    ,

    nível: sequelize.STRING

    ,

    pontuacao: sequelize.DOUBLE

    ,

    nome_exercicio: sequelize.STRING 
});

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

var Tem = conexao.define("Tem", 
{
    id_assunto: {
        type: sequelize.INTEGER,
        references:{
            key: 'id',
            model: Assunto
      }
    }

    ,

    id_exercicios: {
        type: sequelize.INTEGER,
        allownull: true
        references:{
            key: 'id',
            model: Exercicio
        }
     }
 });

var Possui = conexao.define("Disciplina", 
{
    id_disciplina: {
        type: sequelize.INTEGER,
        references:{
            key: 'id',
            model: Disciplina
        }
    }
    ,

    id_assunto: {
        type: sequelize.INTEGER,
        references:{
            key: 'id',
            model: Assunto
        }
    }
})

Disciplina.belongsToMany(Assunto, {through:Possui});
Assunto.belongsToMany(Disciplina, {through:Possui});
Assunto.belongsToMany(Exercicio, {through:Tem});
Exercicio.belongsToMany(Assunto, {through:Tem});

async function sincronizar (){
    await conexao.sync();
}

async function inserir (objeto){
    let r = await Pizza.create(objeto);
    console.log(r);
}

async function consultar (){
    let r = await Pizza.findAll();
    console.log(r);
}
