var Disciplina = {

    create: async function (objeto){
        let access = await Disciplina.create(objeto);
        console.log(access);
    }
    ,
    ler: async function (){
     let ass = await Disciplina.findAll();
     console.log(access);
    }
    ,
    atualizar: async function (novonome, id){
        const novo = await Disciplina.findByPk(Id);
        await novo.update({nome:`${novonome}`});
    }
    ,
     deletar: async function (id){
         const object = await Disciplina.findByPk(id);
         let access = await object.destroy();
         console.log(access);
     }
}

module.exports = Disciplina;