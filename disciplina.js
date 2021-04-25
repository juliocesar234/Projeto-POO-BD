let sequelize = require("sequelize");
let conexao = new sequelize(
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

    area_de_conhecimento: {
      type: sequelize.STRING
    }

    ,

    quantidade: sequelize.INTEGER

    ,


  });


var disciplina = {

  create: async function(objeto) {
    try {
      let dsc = await Disciplina.create(objeto);
      console.log(dsc);
    }
    catch (e) {
      throw new error(name = "Erro ao adicionar o seguinte objeto")
      console.log(e.name)
    }
  }
  ,
  let: async function() {
    try {
      let dsc = await Disciplina.findAll();

      console.log(dsc);
    }
    catch (e) {
      throw new error(name = "Erro ao ler o seguinte objeto");
      console.log(e.name);
    }
  }
  ,

  atualizar: async function(novo_nome, id) {
    try {
      const person = await Disciplina.findByPk(id);
      await person.update({ nome: `${novo_nome}` });
    }
    catch (e) {
      throw new error(name = "Erro para atualizar o seguinte objeto")
      console.log(e.name)
    }
  }
  ,
  deletar: async function(id) {
    try {
      const object = await Disciplina.findByPk(id);
      let dsc = await object.destroy();
      console.log(dsc);
    }
    catch (e) {
      throw new error(name = "Erro ao deletar o seguinte objeto")
      console.log(e.name)
    }
  }
}

module.exports = disciplina;