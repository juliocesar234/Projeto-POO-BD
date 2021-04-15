
var Assunto = {

    create: async function (objeto){
    let ass = await Assunto.create(objeto);
    console.log(ass);
    }
,
    ler: async function (){
        let ass = await Assunto.findAll();
        console.log(ass);
        }
        ,

    atualizar: async function (novonome, id){
        const novo = await Assunto.findByPk(id);
        await novo.update({nome:`${novonome}`});
    }
,
    deletar: async function (id){
        const object = await Assunto.findByPk(id);
        let ass = await object.destroy();
        console.log(ass);
}
}

module.exports= Assunto;