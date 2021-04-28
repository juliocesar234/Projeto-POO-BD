create table disciplina (
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
);



SET enable_seqscan = OFF;

EXPLAIN SELECT nome_exercício FROM exercicios WHERE id=100;
CREATE INDEX index_exercicio ON exercicios USING hash (id);

EXPLAIN SELECT  quantidade_assuntos FROM disciplina WHERE quantidade_assuntos >2;
CREATE INDEX index_disciplina ON disciplina USING hash (quantidade_assuntos);

EXPLAIN SELECT nome FROM assunto WHERE nome= 'Função';
CREATE INDEX index_assunto ON assunto USING hash (nome);

EXPLAIN SELECT nome_exercício FROM exercicios WHERE id>100;
CREATE INDEX index_exercicio1 ON exercicios USING hash (id);

EXPLAIN SELECT nome_exercício FROM exercicios WHERE id<100;
CREATE INDEX index_exercicio2 ON exercicios USING hash (id);

EXPLAIN SELECT nome FROM assunto WHERE nome = 'Equacão';
CREATE INDEX index_assunto1 ON assunto USING hash (nome);

/*edição de Kayan --->*/   
EXPLAIN SELECT nome FROM assunto WHERE nome = 'Funcaoafim';
CREATE INDEX index_assunto3 ON assunto USING hash (nome);

EXPLAIN SELECT nome_exercício FROM exercicios WHERE id=10;
CREATE INDEX index_exercicio4 ON exercicios USING hash (id);

EXPLAIN SELECT  quantidade_assuntos FROM disciplina WHERE quantidade_assuntos =14;
CREATE INDEX index_disciplina1 ON disciplina USING hash (quantidade_assuntos);

EXPLAIN SELECT id FROM assunto WHERE id >=24;
CREATE INDEX index_assunto3 ON assunto USING hash (id);

EXPLAIN SELECT id FROM exercicios WHERE id >4;
CREATE INDEX index_exercicio5 ON assunto USING hash(id);

/* Júlio */
EXPLAIN SELECT nível FROM exercicios WHERE nível = 'Fácil' ;
CREATE INDEX exerciciosnivel ON exercicios USING hash(nível);

EXPLAIN SELECT area_do_conhecimento FROM disciplina WHERE area_do_conhecimento = 'Ciências humanas';
CREATE INDEX disciplinaarea ON disciplina USING hash (area_do_conhecimento);

EXPLAIN SELECT nível FROM exercicios WHERE nível = 'Difícil' ;
CREATE INDEX exerciciosnivel1 ON exercicios USING hash(nível);

EXPLAIN SELECT nível FROM exercicios WHERE nível = 'Médio' ;
CREATE INDEX exerciciosnivel2 ON exercicios USING hash(nível);

EXPLAIN SELECT area_do_conhecimento FROM disciplina WHERE area_do_conhecimento = 'Medicina';
CREATE INDEX disciplinaarea1 ON disciplina USING hash (area_do_conhecimento);

/* JM */
EXPLAIN SELECT area_do_conhecimento FROM disciplina WHERE area_do_conhecimento = 'Direito';
CREATE INDEX area_disciplina1 ON disciplina USING hash (area_do_conhecimento);

EXPLAIN SELECT area_do_conhecimento FROM disciplina WHERE area_do_conhecimento = 'TI';
CREATE INDEX area_disciplina2 ON disciplina USING hash (area_do_conhecimento);

EXPLAIN SELECT nome FROM assunto WHERE nome = 'Crise de 1929';
CREATE INDEX nome_assunto1 ON assunto USING hash (nome);

EXPLAIN SELECT nome FROM assunto WHERE nome= 'Genética';
CREATE INDEX nome_assunto2 ON assunto USING hash (nome);

EXPLAIN SELECT texto_comando FROM exercicios WHERE texto_comando = 'De quantas maneiras ele poderá escalar seu time?'; /* id 90 */
CREATE INDEX texto_comando ON exercicios USING hash (texto_comando); 
