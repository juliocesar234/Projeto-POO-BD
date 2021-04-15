var exercicio = {

    create: async function (objeto){
    let a = await Exercicio.create(objeto);
    console.log(a);
    }
,
    ler: async function (){
        let a = await Exercicio.findAll();
        console.log(a);
        }
        ,

    atualizar: async function (novonome, id){
        const usu = await Exercicio.findByPk(id);
        await usu.update({nome:`${novonome}`});
    }
,
    deletar: async function (id){
        const object = await Exercicio.findByPk(id);
        let a = await object.destroy();
        console.log(a);
}
}

module.exports = exercicio;