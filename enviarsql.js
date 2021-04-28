var {Pool} = require("pg");


async function consultar () {

var pool = new Pool ({

connectionString: 'postgres://lspugqzpqiurbc:6b080a2f1e9883a30c99cf8692d835df5daf1b9d7e3f80c65f705f5eb1ca153d@ec2-52-22-161-59.compute-1.amazonaws.com:5432/dc1aaa46t0nfop',

ssl: {

rejectUnauthorized: false

}

})

let connection = await pool.connect();

await connection.query(

    `create table disciplina (
        area_do_conhecimento varchar(100),
        quantidade_assuntos integer, 
        id integer PRIMARY KEY,
        nome varchar(100)
      );
      
      create table exercicios (
        resolucao varchar(1000),
        id integer PRIMARY KEY, 
        alternativas_corretas varchar(200),
        alternativas_incorretas varchar(200),
        texto_base varchar(2000),
        texto_comando varchar(2000),
        nível varchar(100),
        pontuação numeric, 
        nome_exercício varchar(100)
      );
      
      create table assunto (
        id integer PRIMARY KEY,
        nome varchar(100)
      );
      
      create table tem (
        id_assunto integer, 
        id_exercicios integer,
        constraint fk_assunto1 foreign key (id_assunto) references assunto (id),
        constraint fk_exercicios foreign key (id_exercicios) references exercicios (id),
        constraint pk_tem PRIMARY KEY (id_assunto, id_exercicios)
      );
      
      create table possui (
        id_disciplina integer, 
        id_assunto integer,
        constraint fk_disciplina foreign key (id_disciplina) references disciplina (id),
        constraint fk_assunto foreign key (id_assunto) references assunto (id)
      );`);
      
    connection.release();
}

consultar();