let sequelize = require("sequelize");

let conexao = new sequelize (
    "postgres://lspugqzpqiurbc:6b080a2f1e9883a30c99cf8692d835df5daf1b9d7e3f80c65f705f5eb1ca153d@ec2-52-22-161-59.compute-1.amazonaws.com:5432/dc1aaa46t0nfop",
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
        type: sequelize.INTEGER
    }

    ,

    id_exercicios: {
        type: sequelize.INTEGER,
        allownull: true
    }
});

var Possui = conexao.define("Disciplina", 
{
    id_disciplina: {
        type: sequelize.INTEGER,
        refeences:{
            key: 'id',
            model: Disciplina
        }
    }

    ,

    id_assunto: {
        type: sequelize.INTEGER,
        refeences:{
            key: 'id',
            model: Assunto
        }
    }
})

Disciplina.belongsToMany(Assunto, {through:Possui});
Assunto.belongsToMany(Disciplina, {through:Possui});


let mat = {
    id: 1,
    nome: 'Matemática',
    area_de_conhecimento: 'Exatas'
}

inserirDisciplina(mat);

let equacaodoprimeirograu = {
    id: 1,
    nome: 'Equação do primeiro grau'
}

inserirAssunto(equacaodoprimeirograu);

let questão1 = { 
    id: 1,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '5',
    alternativas_incorretas: (
        '7',
        '6',
        '9/2',
        '-2')
        ,
    texto_comando: 'A solução da equação 3x + 4 = 2x + 9 é'
}

inserirExercicio(questão1);

let questão2 = { 
    id: 2,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '6',
    alternativas_incorretas:( 
        '7',
        '5',
        '9/2',
        '-2'),

    texto_comando: 'A solução da equação 5x – 2 = x + 22 é'
}

inserirExercicio(questão2);

let questão3 = { 
    id: 3,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '7',
    alternativas_incorretas: (
         '5',
         '6',
         '9/2',
        '-2'
    ),
    texto_comando: 'A solução da equação x – 1 = 3x – 15 é'
}

inserirExercicio(questão3);

let questão4 = { 
    id: 4,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '-2',
    alternativas_incorretas: (
         '7',
         '6',
         '9/2',
        '5'
    ),
    texto_comando: 'A solução da equação 4x + 15 = x + 9 é'
}

inserirExercicio(questão4);

let questão5 = { 
    id: 5,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '9/2',
    alternativas_incorretas: (
        '-7/2',
        '6',
         '-2',
        '5'
    ),
    texto_comando: 'A solução da equação 3x – 7 = x + 2 é'
}

inserirExercicio(questão5);

let questão6 = { 
    id: 6,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '-7/2',
    alternativas_incorretas: (
         '9/2',
         '6',
         '-2',
        '5'
    ),
    texto_comando: 'A solução da equação 2x + 1 = 8x + 22 é'
}

inserirExercicio(questão6);

let questão7 = { 
    id: 7,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '10',
    alternativas_incorretas: (
        '5',
        '8',
        '15',
        '20') , 
    texto_comando: 'Se o dobro de um número é 20, qual é esse número?'
}

inserirExercicio(questão7);


let questão8 = { 
    id: 8,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '5',
    alternativas_incorretas: (
        '80',
        '50',
        '10',
        '20') , 
    texto_comando: "Se um retângulo tem 20 cm de comprimento e 100 cm2 de área, qual a medida de sua largura?"
}

let questão9 = { 
    id: 9,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '15',
    alternativas_incorretas: (
        '14',
        '13',
        '12',
        '11') , 
    texto_comando: "Qual o número cujo dobro de seu antecessor, menos 3 é igual a 25?"
}

let questão10 = { 
    id: 10,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '33',
    alternativas_incorretas: (
        '35',
        '31',
        '29',
        '27') , 
    texto_comando: "A soma de dois números ímpares consecutivos é 64. Qual o maior desses dois números?"
}

let questão11 = { 
    id: 11,
    nivel: 'Fácil',
    nome_exercicio: 'Equação',
    alternativas_corretas: '17',
    alternativas_incorretas: (
        '18',
        '16',
        '15',
        '14') , 
    texto_comando: "A soma de quatro números naturais consecutivos é 62. Qual o maior desses números."
}

let questão12 = { 
    id: 12,
    nivel: 'Médio',
    nome_exercicio: 'Equação',
    alternativas_corretas: '20 anos',
    alternativas_incorretas: (
        '28 anos',
        '26 anos',
        '24 anos',
        '22 anos') , 
    texto_comando: "Hoje, a idade de um pai é o quádruplo da idade do filho. Daqui a 10 anos, a idade do pai será o dobro da idade do filho. Qual é hoje a idade do pai?"
}

let fracoes = {
    id: 2,
    nome: "Frações"
}

let questão13 = { 
    id: 13,
    nivel: 'Fácil',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '1/4',
    alternativas_incorretas: (
        '3/4',
        '7/12',
        '5/12',
        '1/3'), 
    texto_comando: "Alan, José e Paulo resolveram sair para comer uma pizza. A pizza foi dividida em 12 pedaços iguais. José comeu 4 pedaços, Paulo comeu 3 pedaços e Alan comeu 2 pedaços. A fração que representa a quantidade de pizza que sobrou é" 
}

let questão14 = { 
    id: 14,
    nivel: 'Médio',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '360',
    alternativas_incorretas: (
        '300',
        '315',
        '330',
        '345'), 
    texto_comando: "Alan já leu 3/11 do segundo volume de Game of Thrones. Essa obra de George R.R. Martin tem 495 páginas. Quantas páginas ainda faltam para Alan terminar o livro?" 
}

let questão15 = { 
    id: 15,
    nivel: 'Médio',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '4500 m2',
    alternativas_incorretas: (
        '4200 m2',
        '4800 m2',
        '5000 m2',
        '5300 m2'), 
    texto_comando: "Nelson e Nilson herdaram um terreno de maneira que 3/5 da área total ficou com Nelson e os 1800 m2 restantes ficaram com Nilson. Qual a área total do terreno?" 
}

let questão16 = { 
    id: 16,
    nivel: 'Médio',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '400 mL',
    alternativas_incorretas: (
        '340 mL',
        '360 mL',
        '380 mL',
        '420 mL'), 
    texto_comando: "Luísa tomou 1/5 de um refrigerante de 1500 mL. Seu irmão, Maurício, tomou 2/3 do que havia sobrado. Qual a quantidade de refrigerante que ainda resta na garrafa?" 
}

let questão17 = { 
    id: 17,
    nivel: 'Médio',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '200,00',
    alternativas_incorretas: (
        '240,00',
        '220,00',
        '180,00',
        '160,00'), 
    texto_comando: "Uma pessoa comprou uma televisão pagando 2/5 do valor de entrada e dividiu o restante em 6 prestações mensais iguais e sem juros. Se o valor pago de entrada foi de R$ 800,00, qual o valor de cada uma das demais prestações?" 
}

let questão18 = { 
    id: 18,
    nivel: 'Médio',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '180',
    alternativas_incorretas: (
        '300',
        '240',
        '150',
        '120'), 
    texto_comando: "Marcos leu metade das páginas de um livro na segunda-feira; na terça-feira, leu a terça parte das páginas do livro; e, na quartafeira, terminou as últimas 30 páginas do livro. Quantas páginas tem o livro?" 
}

let questão19 = { 
    id: 19,
    nivel: 'Médio',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '2/15',
    alternativas_incorretas: (
        '2/5',
        '3/5',
        '3/15',
        '7/15'), 
        texto_base: 'Jéssica comprou adubo para preparar a terra e plantar flores no jardim de sua casa nova, mas o adubo acabou antes que fosse possível preparar todo o jardim, por isso somente 3/5 do jardim recebeu adubo. As flores não nasceram em apenas 1/3 da parte do jardim que não foi adubado.',
    texto_comando: "Qual alternativa representa a fração do jardim na qual as flores não nasceram?" 
}

let questão20 = { 
    id: 20,
    nivel: 'Difícil',
    nome_exercicio: 'Fracão',
    alternativas_corretas: '1/6',
    alternativas_incorretas: (
        '1/12',
        '1/8',
        '1/5',
        '1/2'), 
    texto_base: 'Os gatos Gauss e Sakura estão dormindo no sofá. Gauss chegou antes e quando Sakura chegou, ela ocupou um quarto da superfície que havia sobrado do sofá. Os dois juntos ocupam exatamente a metade da superfície do sofá.',
    texto_comando: "Qual parte da superfície do sofá está ocupada por Sakura?" 
}

let numerosnaturais = {
    id: 3,
    nome: 'Números naturais'
}

let questão21 = { 
    id: 21,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '29',
    alternativas_incorretas: (
        '21',
        '25',
        '27',
        '28'), 
    texto_comando: "Qual dos números a seguir é primo?" 
}

let questão22 = { 
    id: 22,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '2, 3, 4 ou 6',
    alternativas_incorretas: (
        '2, 3 ou 4',
        '2, 3, 4 ou 5',
        '2, 3, 4, 6 ou 8',
        '2, 3, 4, 6, 8 ou 12'), 
    texto_base: 'Júlia comprou uma caixa com 24 bombons. Ela distribuiu todos os bombons entre suas amigas de forma que cada amiga recebeu pelo menos quatro bombons. Todas as amigas receberam a mesma quantidade de bombons.',
    texto_comando: "A quantidade de amigas que Júlia possui pode ser apenas" 
}

let questão23 = { 
    id: 23,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: 'Não, pois o resto da divisão de 78 por 4 é igual a 2.',
    alternativas_incorretas: (
        'Sim, é possível isso ser feito.',
        'Não, pois o resto da divisão de 78 por 4 é igual a 1.',
        'Não, pois o resto da divisão de 78 por 4 é igual a 3.',
        'Não, pois o resto da divisão de 78 por 4 é igual a 4.'), 
    texto_comando: "Uma lista possui 78 exercícios de Matemática. Quatro alunos decidem dividir igualmente a quantidade de exercícios. É possível que isso seja feito?" 
}

let questão24 = { 
    id: 24,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '217 não é primo e 673 é primo.',
    alternativas_incorretas: (
        'ambos são números primos.',
        '217 é primo e 673 não é primo.',
        'nenhum dos dois números é primo.'),
    texto_comando: "Em relação aos números 217 e 673, podemos dizer que:" 
}

let questão25 = { 
    id: 25,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '5750 m',
    alternativas_incorretas: (
        '2350 m',
        '3850 m',
        '4150 m',
        '6450 m'),
    texto_base: 'Um atleta, em treinamento para as olimpíadas, corre em uma pista circular de 250 m de comprimento. Em um determinado dia, este atleta correu uma quantidade inteira de voltas.',
    texto_comando: "Uma possível distância percorrida por ele neste dia é" 
}

let questão26 = { 
    id: 26,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '17',
    alternativas_incorretas: (
        '14',
        '15',
        '16',
        '18'),
    texto_base: 'Um sapo salta sobre uma régua numerada em centímetros.Ele inicia no ponto zero e salta de 6 em 6 centímetros.' ,
    texto_comando: 'Entre 100 cm e 200 cm ele pisa em quantos números?' 
}

let questão27 = { 
    id: 27,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '28',
    alternativas_incorretas: (
        '7',
        '12',
        '18',
        '30'),
    texto_base: 'Um número é chamado de perfeito quando é igual à soma de seus divisores próprios, ou seja, seus divisores excluindo o próprio número.' ,
    texto_comando: 'Qual dos números a seguir é um número perfeito?' 
}

let questão28 = { 
    id: 28,
    nivel: 'Fácil',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '2145',
    alternativas_incorretas: (
        '2288',
        '2250',
        '2179'),
    texto_comando: 'A partir do ano 2016, qual vai ser o primeiro ano divisível por 11 e por 13?' 
}

let questão29 = { 
    id: 29,
    nivel: 'Médio',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '20',
    alternativas_incorretas: (
        '2',
        '6',
        '41',
        '62'),
    texto_base: 'Numa reunião da comunidade do bairro, cada uma das 125 pessoas presentes recebeu um número diferente, a partir do número 1 até o 125. Em dado momento, foi feita uma lista das pessoas com número par e das pessoas com número múltiplo de 3, que deveriam participar de um projeto. Algumas pessoas reclamaram, dizendo que o seu nome aparecia duas vezes na lista.',
    texto_comando: 'Quantas pessoas apareceram duas vezes na lista?' 
}

let questão30 = { 
    id: 30,
    nivel: 'Médio',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '240 dias',
    alternativas_incorretas: (
        '220 dias',
        '120 dias',
        '250 dias',
        '180 dias'),
    texto_base: 'Três vendedores viajam a serviço para uma empresa. O primeiro viaja de 12 em 12 dias, o segundo de 16 em 16 dias e o terceiro de 20 em 20 dias.',
    texto_comando: 'Se todos viajarem hoje, calcule daqui quantos dias eles voltarão a viajar no mesmo dia' 
}

let questão31 = { 
    id: 31,
    nivel: 'Médio',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '12 vezes',
    alternativas_incorretas: (
        '15 vezes',
        '9 vezes',
        '6 vezes',
        '2 vezes'),
    texto_base: '(UDESC) Maria recebeu alta do hospital, mas deverá continuar o tratamento em casa por mais 30 dias completos. Para isso, ela deverá tomar o remédio A a cada 4 horas, o B a cada 5 horas e o C a cada 6 horas. Em casa, Maria iniciou o tratamento tomando o remédio A, o B e o C no mesmo horário. Ela atendeu rigorosamente às recomendações médicas quanto ao horário da ingestão dos medicamentos.',
    texto_comando: 'O número de vezes em que os três remédios foram ingeridos simultaneamente foi:' 
}

let questão32 = { 
    id: 32,
    nivel: 'Médio',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '2070',
    alternativas_incorretas: (
        '2072',
        '2060',
        '2075',
        '2065'),
    texto_base: '(UEPB) Com relação ao movimento dos cometas no universo, sabemos que muitos deles passam pelo planeta Terra em períodos de anos definidos. Os cometas A e B passam de 20 em 20 anos e 35 em 35 anos respectivamente, e suas últimas aparições simultâneas na Terra ocorreram em 1930.',
    texto_comando: 'A próxima passagem simultânea dos dois pela Terra ocorrerá no ano' 
}

let questão33 = { 
    id: 33,
    nivel: 'Médio',
    nome_exercicio: 'Números naturais',
    alternativas_corretas: '9',
    alternativas_incorretas: (
        '6',
        '12',
        '15',
        '18'),
    texto_base: '(UPE) Rodrigo estava observando o pisca-pisca do enfeite natalino de sua casa. Ele é composto por lâmpadas nas cores amarelo, azul, verde e vermelho. Rodrigo notou que lâmpadas amarelas acendem a cada 45 segundos, as lâmpadas verdes, a cada 60 segundos, as azuis, a cada 27 segundos, e as vermelhas só acendem quando as lâmpadas das outras cores estão acesas ao mesmo tempo.',
    texto_comando: 'De quantos em quantos minutos, as lâmpadas vermelhas acendem?' 
}

var questão34 = { 
    id: 34,
    nivel: 'Médio',
    nome_exercicio: 'Números inteiros',
    alternativas_corretas: '1',
    alternativas_incorretas: (
        '-3',
        '-1',
        '3',
        '5'),
    texto_base: '(UFMT MG – 2006) XYZ4 e X4YZ representam dois números inteiros de quatro algarismos.',
    texto_comando: 'Se X4YZ excede XYZ4 em 288 unidades, então Z-Y é igual a:' 
}

let questão35 = { 
    id: 35,
    nivel: 'Fácil',
    nome_exercicio: 'Números inteiros',
    alternativas_corretas: '2811',
    alternativas_incorretas: (
        '2888',
        '-2845',
        '3393',
        '-3393'),
    texto_base: 'Efetue a soma entre os números inteiros ',
    texto_comando: '3102 e -291:' 
}

let questão36 = { 
    id: 36,
    nivel: 'Média',
    nome_exercicio: 'Números inteiros',
    alternativas_corretas: '167',
    alternativas_incorretas: (
        '168',
        '170',
        '166',
        '165'),
    texto_base: 'Numa divisão inteira, o divisor é 12, o quociente é uma unidade maior que o divisor e o resto, uma unidade menor que o divisor.',
    texto_comando: 'Qual é o valor do dividendo?' 
}

let questão37 = { 
    id: 37,
    nivel: 'Média',
    nome_exercicio: 'Números inteiros',
    alternativas_corretas: '4.256.000',
    alternativas_incorretas: (
        '4.256.135',
        '4.256.235',
        '4.255.000',
        '4.255.035'),
    texto_base: 'Um dicionário tem 950 páginas; cada página é dividida em 2 colunas; cada coluna tem 64 linhas; cada linha tem, em média 35 letras.',
    texto_comando: 'Quantas letras há nesse dicionário?' 
}

let questão38 = { 
    id: 38,
    nivel: 'Média',
    nome_exercicio: 'Números inteiros',
    alternativas_corretas: 'R$ 1.440',
    alternativas_incorretas: (
        'R$ 1.540',
        'R$ 1.445',
        'R$ 1.450',
        'R$ 1.545'),
    texto_base: 'Uma pessoa ganha R$ 40,00 por dia de trabalho e gasta R$ 800,00 por mês.',
    texto_comando: 'Quanto ela economizará em uma ano se ela trabalhar, em média, 23 dias por mês?' 
}

let questão39 = { 
    id: 39,
    nivel: 'Fácil',
    nome_exercicio: 'Números inteiros',
    alternativas_corretas: '110 litros',
    alternativas_incorretas: (
        '111 litros',
        '110,5 litros',
        '111,5 litros',
        '112 litros'),
    texto_base: 'Um negociante comprou 8 barricas de vinho, todas com a mesma capacidade. Tendo pago R$ 7,00 o litro e vendido a R$ 9,00, ele ganhou, ao todo, R$ 1.760,00.',
    texto_comando: 'Qual era a capacidade de cada barrica?' 
}

let questão40 = { 
    id: 40,
    nivel: 'Fácil',
    nome_exercicio: 'Números inteiros',
    alternativas_corretas: 'R$ 622,00',
    alternativas_incorretas: (
        'R$ 623,00',
        'R$ 624,00',
        'R$ 625,00',
        'R$ 626,00'),
    texto_base: ' Do salário de R$ 3.302,00, Seu José transferiu uma parte para uma conta de poupança. Já a caminho de casa, Seu José considerou que se tivesse transferido o dobro daquele valor, ainda lhe restariam R$ 2.058,00 do seu salário em conta corrente. De quanto foi o depósito feito?',
    texto_comando: 'De quanto foi o depósito feito?' 
}

let questão41 = { 
    id: 41,
    nivel: 'Médio',
    nome_exercicio: 'Números inteiros',
    alternativas_corretas: 'Marta: R$ 110,00, Marisa: R$ 90,00 e Yara: R$ 75,00',
    alternativas_incorretas: (
        'Marta: R$ 113,00, Marisa: R$ 90,00 e Yara: R$ 75,00',
        'Marta: R$ 111,00, Marisa: R$ 93,00 e Yara: R$ 78,00',
        'Marta: R$ 110,00, Marisa: R$ 90,50 e Yara: R$ 75,00',
        'Marta: R$ 115,00, Marisa: R$ 90,00 e Yara: R$ 75,00'),
    texto_base: ' Marta, Marisa e Yara têm, juntas, R$ 275, 00. Marisa tem R$ 15,00 mais o que Yara e Marta possui R$ 20,00 mais que Marisa.',
    texto_comando: 'Quanto tem cada uma das três meninas?' 
}

let questão42 = { 
    id: 42,
    nivel: 'Médio',
    nome_exercicio: 'Números inteiros',
    alternativas_corretas: 'Renato: 15 e Flávia: 8',
    alternativas_incorretas: (
        'Renato: 14 e Flávia: 8',
        'Renato: 13 e Flávia: 8',
        'Renato: 15 e Flávia: 7',
        'Renato: 14 e Flávia: 9'),
    texto_base: 'Renato e Flávia ganharam, ao todo, 23 bombons. Se Renato comesse 3 bombons e desse 2 para Flávia, eles ficariam com o mesmo número de bombons.',
    texto_comando: 'Quantos bombons ganhou cada um deles?' 
}

let questão43 = { 
    id: 43,
    nivel: 'Médio',
    nome_exercicio: 'Noções básicas de estatísticas',
    alternativas_corretas: 'A média das idades aumenta em menos de 1 ano',
    alternativas_incorretas: (
        'A média das idades aumenta em menos de 3 ano',
        'A média das idades aumenta em menos de 2 ano',
        'A média das idades diminui em menos de 1 ano',
        'A média das idades diminui em menos de 2 ano'),
    texto_base: 'Em um grupo de pessoas, as idades são : 10, 12, 15 e 17 anos.',
    texto_comando: 'Caso uma pessoa de 16 anos junte-se ao grupo, o que acontece com a média das idades do grupo?' 
}

let questão44 = { 
    id: 44,
    nivel: 'Fácil',
    nome_exercicio: 'Noções básicas de estatísticas',
    alternativas_corretas: 'O tempo médio de votação dessas 5 pessoas, foi de 3 minutos e 13 segundos',
    alternativas_incorretas: (
        'O tempo médio de votação dessas 5 pessoas, foi de 4 minutos e 13 segundos',
        'O tempo médio de votação dessas 5 pessoas, foi de 5 minutos e 13 segundos',
        'O tempo médio de votação dessas 5 pessoas, foi de 3 minutos e 14 segundos',
        'O tempo médio de votação dessas 5 pessoas, foi de 3 minutos e 15 segundos'),
    texto_base: 'Para votar, cinco eleitores demoraram, respectivamente, 3min 38s, 3min 18s, 2min 46s, 2min 57s e 3min 26s.',
    texto_comando: 'Qual foi a média do tempo de votação (em minutos e segundos) desses eleitores?' 
}

let questão45 = { 
    id: 45,
    nivel: 'Médio',
    nome_exercicio: 'Noções básicas de estatísticas',
    alternativas_corretas: '32,5',
    alternativas_incorretas: (
        '35',
        '37,5',
        '40',
        '42,5'),
    texto_base: 'Um veículo viaja entre dois povoados da Serra da Mantiqueira, percorrendo a primeira terça parte do trajeto à velocidade média de 60 km/h, a terça parte seguinte a 40 km/h e o restante do percurso a 20 km/h.',
    texto_comando: 'O valor que melhor aproxima a velocidade média do veículo nessa viagem, em km/h, é' 
}

let questão46 = { 
    id: 46,
    nivel: 'Médio',
    nome_exercicio: 'Noções básicas de estatísticas',
    alternativas_corretas: '30, 29 e 6,8.',
    alternativas_incorretas: (
        '30, 27 e 6,8',
        ' 27, 30 e 2,4',
        '29, 30 e 7,0',
        '30, 29 e 7,0'),
    texto_base: 'Uma determinada região apresentou, nos últimos cinco meses, os seguintes valores (fornecidos em mm) para a precipitação pluviométrica média: jun = 32, jul = 34, ago = 27, set = 29, out = 28.',
    texto_comando: 'A média, a mediana e a variância do conjunto de valores acima são, respectivamente:' 
}

let questão47 = { 
    id: 47,
    nivel: 'Fácil',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: 'R$ 3,00',
    alternativas_incorretas: (
        'R$ 3,50',
        'R$ 3,25',
        'R$ 3,20',
        'R$ 4,00'),
    texto_base: 'Em uma promoção, o preço do refrigerante que era de R$ 4,00 foi reduzido de 25%,',
    texto_comando: 'qual o novo preço?' 
}

let questão48 = { 
    id: 48,
    nivel: 'Fácil',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: 'o cliente deixou de ganhar um desconto de 4 reais',
    alternativas_incorretas: (
        'o cliente deixou de ganhar um desconto de 15 reais',
        'o cliente deixou de ganhar um desconto de 12 reais',
        'o cliente deixou de ganhar um desconto de 14 reais',
        'o cliente deixou de ganhar um desconto de 5 reais'),
    texto_base: 'Para aumentar as vendas no início do ano, uma loja de departamentos remarcou os preços de seus produtos 20% abaixo do preço original. Quando chegam ao caixa, os clientes que possuem o cartão fidelidade da loja têm direito a um desconto adicional de 10% sobre o valor total de suas compras. Um cliente deseja comprar um produto que custava R$50,00 antes da remarcação de preços. Ele não possui o cartão fidelidade da loja.',
    texto_comando: 'Caso esse cliente possuísse o cartão fidelidade da loja, a economia adicional que obteria ao efetuar a compra, em reais, seria de:' 
}

let questão49 = { 
    id: 49,
    nivel: 'Fácil',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: '12,5%',
    alternativas_incorretas: (
        '15,5%',
        '16%',
        '15%',
        '20%'),
    texto_base: '25,',
    texto_comando: 'representa quantos por cento de 200?' 
}

let questão50 = { 
    id: 50,
    nivel: 'Fácil',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: '200',
    alternativas_incorretas: (
        '150',
        '350',
        '400',
        '450'),
    texto_base: '30,',
    texto_comando: 'representa 15% de qual número?' 
}

let questão51 = { 
    id: 51,
    nivel: 'Fácil',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: '12 meninas',
    alternativas_incorretas: (
        '10 meninas',
        '14 meninas',
        '18 meninas',
        '20 meninas'),
    texto_base: 'Em uma sala de aula há 30 alunos, dos quais 40% são meninas.',
    texto_comando: 'Quantas meninas têm na sala?' 
}

let questão52 = { 
    id: 52,
    nivel: 'Fácil',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: '40%',
    alternativas_incorretas: (
        '10%',
        '20%',
        '30%',
        '50%'),
    texto_base: 'Convertendo a fração 2 sobre 5 em uma fração centesimal,',
    texto_comando: 'qual o resultado em porcentagem?' 
}

let questão53 = { 
    id: 53,
    nivel: 'Fácil',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: 'Mariana',
    alternativas_incorretas: (
        ' Júlia',
        'As duas acertaram o mesmo número de questões.',
        'As duas acertaram o menos número que João.',
        'As duas erraram o mesmo número de questão de João'),
    texto_base: 'Júlia acertou 75% das questões de Matemática do teste e Mariana acertou 4/5.',
    texto_comando: 'Quem acertou mais questões?' 
}

let questão54 = { 
    id: 54,
    nivel: 'Média',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: 'R$ 352,00',
    alternativas_incorretas: (
        '  R$ 372,00',
        'R$ 342,00',
        'R$ 362,00',
        ' R$ 332,00'),
    texto_base: 'Na promoção de uma loja de eletrodomésticos, um aparelho de som que custava R$ 400,00 teve um desconto de 12%.',
    texto_comando: 'Quanto o cliente que decidir comprar o equipamento pagará?' 
}

let questão55 = { 
    id: 55,
    nivel: 'Média',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: 'Reprovado com 4% de peças com defeito.',
    alternativas_incorretas: (
        'Aprovado com 1% de peças com defeito.',
        'Aprovado com 2% de peças com defeito.',
        'Reprovado com 3% de peças com defeito.',
        'Reprovado com 5% de peças com defeito.'),
    texto_base: 'Em uma indústria, o setor de qualidade constatou que um lote com 4500 peças, 180 apresentavam algum defeito. Para um lote ser aprovado é necessário que o número de peças com defeito seja inferior a 3%.',
    texto_comando: 'Neste caso, o lote foi aprovado ou reprovado?' 
}

let questão56 = { 
    id: 56,
    nivel: 'Média',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: 'R$ 123,25',
    alternativas_incorretas: (
        'R$ 112,20',
        'R$ 135,50',
        'R$ 140,15',
        'R$ 142,15'),
    texto_base: 'Na última liquidação de verão, uma loja vendia todos os seus produtos com um desconto de 15%. Se uma camisa antes da liquidação custava R$ 145,00,',
    texto_comando: 'quanto passou a custar na liquidação?' 
}

let questão57 = { 
    id: 57,
    nivel: 'Média',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: 'R$ 2040,00',
    alternativas_incorretas: (
        'R$ 2080,00',
        'R$ 3060,00',
        'R$ 3020,00',
        'R$ 3040,00'),
    texto_base: 'Os vendedores de uma loja recebem mensalmente um salário fixo no valor de R$ 1200,00 e uma comissão de 6% referente ao valor total do que venderam no mês.',
    texto_comando: 'Sendo assim, qual será o valor recebido por um vendedor que vendeu no mês R$14000,00?' 
}

let questão58 = { 
    id: 58,
    nivel: 'Média',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: 'R$ 1545,00 com aumento e R$ 1498,65 com desconto.',
    alternativas_incorretas: (
        'R$ 1555,00 com aumento e R$ 1498,65 com desconto.',
        'R$ 1545,00 com aumento e R$ 1500,00 com desconto.',
        'R$ 1555,00 com aumento e R$ 1500,00 com desconto.',
        'R$ 1545,00 com aumento e R$ 1550,00 com desconto.'),
    texto_base: 'Em uma loja, uma máquina de lavar roupas custava R$ 1500,00 e seu preço sofreu um aumento de 3%. Logo após o aumento a loja resolveu fazer uma promoção oferecendo um desconto de 3% no mesmo produto.',
    texto_comando: 'Qual o valor do produto após o aumento e após o desconto?' 
}

let questão59 = { 
    id: 59,
    nivel: 'Difícil',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: '5 216,68',
    alternativas_incorretas: (
        '240,40',
        '548,11',
        '1 723,67',
        '4 026,70'),
    texto_base: '(Enem/2015) Segundo dados apurados no Censo 2010, para uma população de 101,8 milhões de brasileiros com 10 anos ou mais de idade e que teve algum tipo de rendimento em 2010, a renda média mensal apurada foi de R$1202,00. A soma dos rendimentos mensais dos 10% mais pobres correspondeu a apenas 1,1% do total de rendimentos dessa população considerada, enquanto que a soma dos rendimentos mensais dos 10% mais ricos correspondeu a 44,5% desse total.',
    texto_comando: 'Qual foi a diferença, em reais, entre a renda média mensal de um brasileiro que estava na faixa dos 10% mais ricos e de um brasileiro que estava na faixa dos 10% mais pobres?' 
}

let questão60 = { 
    id: 60,
    nivel: 'Difícil',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: '22,00 cm, 12,00 cm e 5,00 cm',
    alternativas_incorretas: (
        '27,50 cm, 15,00 cm e 6,25 cm',
        '34,37 cm, 18,75 cm e 7,81 cm',
        '35,20 cm, 19,20 cm e 8,00 cm',
        '44,00 cm, 24,00 cm e 10,00 cm'),
    texto_base: '(Enem/2016) Em uma empresa de móveis, um cliente encomenda um guarda-roupa nas dimensões 220 cm de altura, 120 cm de largura e 50 cm de profundidade. Alguns dias depois, o projetista, com o desenho elaborado na escala 1 : 8, entra em contato com o cliente para fazer sua apresentação. No momento da impressão, o profissional percebe que o desenho não caberia na folha de papel que costumava usar. Para resolver o problema, configurou a impressora para que a figura fosse reduzida em 20%.',
    texto_comando: 'A altura, a largura e a profundidade do desenho impresso para a apresentação serão, respectivamente,' 
}

let questão61 = { 
    id: 61,
    nivel: 'Média',
    nome_exercicio: 'Porcentagem',
    alternativas_corretas: '53',
    alternativas_incorretas: (
        '74',
        '70',
        '64',
        '60'),
    texto_base: 'O setor de recursos humanos de uma empresa pretende fazer contratações para adequar-se ao artigo 93 da Lei n° 8.213/91, que dispõe: Art. 93. A empresa com 100 (cem) ou mais empregados está obrigada a preencher de 2% (dois por cento) a 5% (cinco por cento) dos seus cargos com beneficiários reabilitados ou pessoas com deficiência, habilitados, na seguinte proporção: I. até 200 empregados ...................................... 2%; II. de 201 a 500 empregados.............................. 3%; III. de 501 a 1 000 empregados........................... 4%; V. de 1 001 em diante......................................... 5%. Constatou-se que a empresa possui 1 200 funcionários, dos quais 10 são reabilitados ou com deficiência, habilitados. Para adequar-se à referida lei, a empresa contratará apenas empregados que atendem ao perfil indicado no artigo 93.',
    texto_comando: 'O número mínimo de empregados reabilitados ou com deficiência, habilitados, que deverá ser contratado pela empresa é' 
}

let questão62 = { 
    id: 62,
    nivel: 'Média',
    nome_exercicio: 'Geometria Plana',
    alternativas_corretas: '1.017,36 m2',
    alternativas_incorretas: (
        '1.254,98 m2',
        '1.589,77 m2',
        '1.698,44 m2',
        '1.710,34 m2'),
    texto_base: '(IFSP - 2016) Uma praça pública em forma de circunferência tem raio de 18 metros.',
    texto_comando: 'Diante do exposto, assinale a alternativa que apresenta sua área.' 
} 

let questão63 = { 
    id: 63,
    nivel: 'Média',
    nome_exercicio: 'Geometria Plana',
    alternativas_corretas: '6√3 + 2 e 2√3 + 6',
    alternativas_incorretas: (
        '6√3 + 2 e 2 + 6√3',
        '6√3 e 1 + 2√3',
        '6√3 + 2 e 12',
        '6 e 2√3'),
    texto_base: '(IFRS - 2016) Um retângulo tem dimensões x e y, que são expressas pelas equações x2 = 12 e (y - 1)2 = 3.',
    texto_comando: 'O perímetro e a área deste retângulo são, respectivamente' 
}

let questão64 = { 
    id: 64,
    nivel: 'Média',
    nome_exercicio: 'Geometria Plana',
    alternativas_corretas: '16 mil pessoas.',
    alternativas_incorretas: (
        '32 mil pessoas.',
        '12 mil pessoas.',
        '24 mil pessoas.',
        '40 mil pessoas.'),
    texto_base: 'Para facilitar o cálculo de quantas pessoas participam de eventos públicos, geralmente, considera-se que um metro quadrado é ocupado por quatro pessoas.',
    texto_comando: 'Para comemorar o aniversário de uma cidade, a prefeitura contratou uma banda para tocar na praça localizada no centro, que possui uma área de 4000 m2. Sabendo que a praça ficou lotada, quantas pessoas aproximadamente compareceram ao evento?' 
}

let questão65 = { 
    id: 65,
    nivel: 'Média',
    nome_exercicio: 'Geometria Plana',
    alternativas_corretas: '147 m2',
    alternativas_incorretas: (
        '294 m2',
        '153 m2',
        '216 m2',
        '166 m2'),
    texto_base: 'Ana decidiu construir uma piscina retangular em sua casa com as medidas 8 m de base por 5 m de altura. Ao redor dela, em forma de trapézio, foi preenchido com grama.',
    texto_comando: 'Sabendo que a altura do trapézio é 11 m e as suas bases são 20 m e 14 m, qual a área da parte que foi preenchida com grama?' 
}

let questão66 = { 
    id: 66,
    nivel: 'Fácil',
    nome_exercicio: 'Geometria Plana',
    alternativas_corretas: '4',
    alternativas_incorretas: (
        '5',
        '3',
        '6',
        '8'),
    texto_base: ' (UFMT) –',
    texto_comando: 'Assinale a medida do lado de um quadrado, sabendo-se que o número que representa o seu perímetro é o mesmo que representa sua área.' 
}

let questão67 = { 
    id: 67,
    nivel: 'Fácil',
    nome_exercicio: 'Geometria Plana',
    alternativas_corretas: '5,6 metros.',
    alternativas_incorretas: (
        '1,16 metros.',
        '3,0 metros.',
        '5,4 metros.',
        '7,04 metros.'),
    texto_base: 'ENEM – A rampa de um hospital tem na sua parte mais elevada uma altura de 2,2 metros. Um paciente ao caminhar sobre a rampa percebe que se deslocou 3,2 metros e alcançou uma altura de 0,8 metro.',
    texto_comando: 'A distância em metros que o paciente ainda deve caminhar para atingir o ponto mais alto da rampa é' 
}

let questão68 = { 
    id: 68,
    nivel: 'médio',
    nome_exercicio: 'Geometria Plana',
    alternativas_corretas: ' 4 e 5',
    alternativas_incorretas: (
        '1 e 2',
        '2 e 3',
        '3 e 4',
        '5 e 6'),
    texto_base: '(Fuvest/77) Num triângulo ABC, os ângulos Bˆe Cˆ medem 50º e 70º, respectivamente',
    texto_comando: 'A bissetriz relativa ao vértice A forma com a reta BC ângulos proporcionais a:' 
}

let questão69 = { 
    id: 69 ,
    nivel: 'médio',
    nome_exercicio: 'Geometria Plana',
    alternativas_corretas: '6√3',
    alternativas_incorretas: (
        '5√3',
        '7√3',
        '8√3',
        '9√3'),
    texto_base: '(Fuvest/05) A soma das distâncias de um ponto interior de um triângulo equilátero aos seus lados é 9',
    texto_comando: ' Assim, a medida do lado do triângulo é' 
}

let questão70 = { 
    id: 70,
    nivel: 'médio',
    nome_exercicio: 'Geometria Plana',
    alternativas_corretas: '13/150',
    alternativas_incorretas: (
        '1/50',
        '13/60',
        '1/30',
        '2/25'),
    texto_base: '(CN/08) Seja ABC um triângulo retângulo com catetos AC = 12 e AB = 5. A bissetriz interna traçada de Cintersecta o lado AB em M.',
    texto_comando: ' Sendo I o incentro de ABC, a razão entre as áreas de BMI e ABC é' 
}

let questão71 = { 
    id: 71,
    nivel: 'fácil',
    nome_exercicio: 'Geometria Plana',
    alternativas_corretas: '√21',
    alternativas_incorretas: (
        '√20',
        '√22',
        '√23',
        'nda'),
    texto_base: 'Um certo quadrilátero tem diagonais perpendiculares. As medidas de três dos lados desse quadrilátero são 2,3 e 4.',
    texto_comando: '. Qual das alternativas a seguir traz uma medida possível para o outro lado?' 
}

let questão72 = { 
    id: 72,
    nivel: 'fácil',
    nome_exercicio: 'Geometria Plana',
    alternativas_corretas: '6',
    alternativas_incorretas: (
        '3',
        '5',
        '7',
        '10'),
    texto_base: '(Olimpíada Italiana) Um ponto P é interno ao quadrado ABCD. A distância de P aos vértices A, B, C valem,respectivamente, 2, 7 e 9. ',
    texto_comando: 'A distância MD é igual a' 
}

let questão73 = { 
    id: 73,
    nivel: 'fácil',
    nome_exercicio: 'circunferência',
    alternativas_corretas: 'Uma circunferência de centro O e raio r é um conjunto de todos os pontos cuja distância até O é igual a r.',
    alternativas_incorretas: (
        'Uma circunferência é uma região plana limitada por um círculo.',
        'Uma circunferência é um conjunto de pontos cuja distância até o centro é sempre menor do que a constante r.',
        'Uma circunferência possui apenas dois raios e a soma desses dois elementos é igual ao diâmetro.',
        ' Círculo é a região do plano limitada por um diâmetro.'),
    texto_base: 'A respeito da definição básica das circunferências e de suas propriedades',
    texto_comando: 'assinale a alternativa correta.' 
}

let questão74 = { 
    id: 74,
    nivel: 'fácil',
    nome_exercicio: 'circunferência',
    alternativas_corretas: 'Sabendo que o segmento OA tem comprimento menor do que r, pode-se afirmar que A pertence ao círculo limitado por essa circunferência.',
    alternativas_incorretas: (
        'Dado um ponto A, fora da circunferência, o segmento OA é menor ou igual a r.',
        ' Sabendo que o segmento OA tem comprimento maior do que r, pode-se afirmar que A pertence à circunferência.',
        'O diâmetro do círculo limitado por essa circunferência é igual a 3r.',
        'Para que o ponto A pertença à circunferência, basta que a distância de A até O seja menor do que r.'),
    texto_base: 'Dada uma circunferência de centro O e raio r',
    texto_comando: 'assinale a alternativa correta:' 
}

let questão75 = { 
    id: 75,
    nivel: 'fácil',
    nome_exercicio: 'circunferência',
    alternativas_corretas: 'R$ 800,70',
    alternativas_incorretas: (
        'R$ 1601,40',
        'R$ 900,00',
        'R$ 1600,00',
        ' R$ 94,20'),
    texto_base: 'Uma praça tem formato circular e deseja-se cercá-la para a realização de um evento durante um final de semana. Para tanto, serão gastos R$ 8,50 por metro de material. Sabendo que o diâmetro dessa praça é de 30 metros,',
    texto_comando: 'qual será o valor gasto com a cerca nesse evento?' 
}

let questão76 = { 
    id: 76,
    nivel: 'fácil',
    nome_exercicio: 'circunferência',
    alternativas_corretas: '139,25 cm',
    alternativas_incorretas: (
        '314 cm',
        '39,25 cm',
        '78,5 cm',
        '157 cm'),
    texto_base: 'Um setor circular possui ângulo igual a 45° e raio igual a 50 cm',
    texto_comando: 'Qual é o perímetro desse setor circular?' 
}

let questão77= { 
    id: 77,
    nivel: 'fácil',
    nome_exercicio: 'circunferência',
    alternativas_corretas: '3240 m',
    alternativas_incorretas: (
        '1620 m',
        '4860 m',
        '6480 m',
        '8100 m'),
    texto_base: 'Para realizar o teste físico em determinado concurso da PM, os candidatos devem correr ao redor de uma praça circular cujo diâmetro mede 120 m.',
    texto_comando: 'Uma pessoa que dá 9 voltas ao redor dessa praça percorre: (Dado: π = 3).' 
}

let questão78 = { 
    id: 78,
    nivel: 'fácil',
    nome_exercicio: 'circunferência',
    alternativas_corretas: '50%',
    alternativas_incorretas: (
        '25%',
        '100%',
        '150%'),
    texto_base: 'Se o raio de uma circunferência tiver um acréscimo de 50% então o acréscimo percentual em',
    texto_comando: 'seu comprimento será igual a:' 
}

let questão79 = { 
    id: 79,
    nivel: 'médio',
    nome_exercicio: 'circunferência',
    alternativas_corretas: '10190 voltas',
    alternativas_incorretas: (
        '10000 voltas',
        '10199 voltas',
        '10210 voltas',
        '10220 voltas'),
    texto_base: '(Exatus). Donato, patrulheiro militar, utiliza uma bicicleta no exercício da sua função, que é patrulhar uma região turística de Vitória-ES. Sabe-se que o pneu dessa bicicleta possui formato circular de diâmetro medindo 70 cm.',
    texto_comando: 'Considerando que na última quinta-feira Donato percorreu 21,4 km com essa bicicleta em serviço de patrulhamento, é correto afirmar que o pneu dessa bicicleta deu:' 
}

let questão80 = { 
    id: 80,
    nivel: 'médio',
    nome_exercicio: 'circunferência',
    alternativas_corretas: '3240 m',
    alternativas_incorretas: (
        '1620 m',
        '4860 m',
        '6480 m',
        '8100 m'),
    texto_base: '(Exatus). Para realizar o teste físico em determinado concurso da PM, os candidatos devem correr ao redor de uma praça circular cujo diâmetro mede 120 m.',
    texto_comando: 'Uma pessoa que dá 9 voltas ao redor dessa praça percorre: (Dado: π = 3).' 
}

let questão81 = { 
    id: 81,
    nivel: 'Fácil',
    nome_exercicio: 'circunferência',
    alternativas_corretas: '50%',
    alternativas_incorretas: (
        '25%',
        '100%',
        '150%'),
    texto_base: 'Se o raio de uma circunferência tiver um acréscimo de 50% então ',
    texto_comando: 'o acréscimo percentual em seu comprimento será igual a:' 
}

let questão82= { 
    id: 82,
    nivel: 'médio',
    nome_exercicio: 'circunferência',
    alternativas_corretas: '2200m',
    alternativas_incorretas: (
        '2000m;',
        '2400m',
        '2800m',
        '3000m'),
    texto_base: 'Em uma praça há uma pista de corrida circular com 50m de raio. ',
    texto_comando: 'Um corredor deu 7 voltas completas nessa pista. Esse corredor percorreu, aproximadamente:' 
}

let questão83= { 
    id: 83,
    nivel: 'Médio',
    nome_exercicio: 'circunferência',
    alternativas_corretas: ' 2637,6 m',
    alternativas_incorretas: (
        '376,8 m',
        '1888,4 m',
        '2337,2 m'),
    texto_base: '(Consulplan). Maria faz, diariamente, caminhadas em volta da lagoa de sua cidade. Considerando que a lagoa tem formato circular de raio igual a 20 metros e que π = 3,14, ela se propôs a dar 3 voltas ao redor da lagoa por dia.',
    texto_comando: 'De acordo com as informações apresentadas, quantos metros Maria caminha por semana?' 
}

let questão84 = { 
    id: 84,
    nivel: 'médio',
    nome_exercicio: 'circunferência',
    alternativas_corretas: '4',
    alternativas_incorretas: (
        '2',
        '9',
        '3,5',
        '3'),
    texto_base: 'Ângulos na Circunferência: (FUVEST-SP) O raio da circunferência da figura é 2,5 cm. AT = 6 cm (t é o ponto de tangência).',
    texto_comando: 'Então, Ab = x vale, em centímetros:' 
}

let questão85 = { 
    id: 85,
    nivel: 'Difícil',
    nome_exercicio: 'circunferência',
    alternativas_corretas: '382',
    alternativas_incorretas: (
        '157',
        '284',
        '628',
        '764'),
    texto_base: 'Um arco de circunferência mede 300°, e seu comprimento é 2 km.',
    texto_comando: 'Qual o número inteiro Mais PróxiMo da medida do raio em metros?' 
}

let questão86 = { 
    id: 86,
    nivel: 'Difícil',
    nome_exercicio: 'circunferência',
    alternativas_corretas: '180°',
    alternativas_incorretas: (
        '5.180º',
        '3.180º',
        '2.180º',
        '90°'),
    texto_base: 'Ângulos na Circunferência: (Cesgranrio) Em um círculo de raio 5, está inscrito um quadrilátero AbCD.',
    texto_comando: 'sobre a soma dos ângulos opostos BÂD e BThis is the rendered form of the equation. You can not edit this directly. Right click will give you the option to save the image, and in most browsers you can drag the image onto your desktop or another program.D podemos afirmar que vale:' 
}

let questão87 = { 
    id: 87,
    nivel: 'fácil',
    nome_exercicio: 'circunferência',
    alternativas_corretas: '10',
    alternativas_incorretas: (
        '12',
        '11',
        '9',
        '8'),
    texto_base: 'Num trapézio retângulo circunscritível, a soma dos dois lados paralelos é igual a 18 cm e a diferença dos dois outros lados é igual a 2 cm.',
    texto_comando: 'se r é o raio da circunferência inscrita e a é o comprimento do menor lado do trapézio, então a soma a + r (em cm) é igual a:' 
}

let questão88= { 
    id: 88,
    nivel: 'fácil',
    nome_exercicio: 'circunferência',
    alternativas_corretas: '25 horas.',
    alternativas_incorretas: (
        '16 horas.',
        '20 horas.',
        '32 horas.',
        ' 36 horas.'),
    texto_base: 'Ângulos na Circunferência: (Enem–2002) As cidades de Quito e Cingapura encontram-se próximas à Linha do Equador e em pontos diametralmente opostos no globo terrestre. Considerando o raio da Terra igual a 6 370 km,',
    texto_comando: 'pode-se afirmar que um avião saindo de Quito, voando em média 800 km/h, descontando as paradas de escala, chega a Cingapura em aproximadamente:' 
}

let questão89 = { 
    id: 89,
    nivel: 'fácil',
    nome_exercicio: 'Analise Combinatoria',
    alternativas_corretas: '3 024 senhas',
    alternativas_incorretas: (
        '1 498 senhas',
        '2 378 senhas',
        '4 256 senhas'),
    texto_base: 'Quantas senhas com 4 algarismos diferentes podemos escrever com os algarismos ',
    texto_comando: '1, 2, 3, 4, 5, 6, 7, 8,e 9?' 
}

let questão90 = { 
    id: 90,
    nivel: 'médio',
    nome_exercicio: 'Analise Combinatoria',
    alternativas_corretas: ' 5 005 maneiras',
    alternativas_incorretas: (
        ' 4 450 maneiras',
        '5 210 maneiras',
        '4 500 maneiras'),
    texto_base: 'Um técnico de um time de voleibol possui a sua disposição 15 jogadores que podem jogar em qualquer posição. ',
    texto_comando: ' De quantas maneiras ele poderá escalar seu time?' 
}

let questão91 = { 
    id: 91,
    nivel: 'fácil',
    nome_exercicio: 'Analise Combinatoria',
    alternativas_corretas: '24 maneiras',
    alternativas_incorretas: (
        '10 maneiras',
        '32 maneiras',
        '40 maneiras'),
    texto_base: 'De quantas maneiras diferentes, uma pessoa pode se vestir ',
    texto_comando: ' tendo 6 camisas e 4 calças?' 
}

let questão92= { 
    id: 92,
    nivel: 'médio',
    nome_exercicio: 'Analise Combinatoria',
    alternativas_corretas: '720 maneiras',
    alternativas_incorretas: (
        '610 maneiras',
        ' 800 maneiras',
        '580 maneiras'),
    texto_base: 'e quantas maneiras diferentes 6 amigos ',
    texto_comando: 'podem sentar em um banco para tirar uma foto?' 
}

let questão93 = { 
    id: 93,
    nivel: 'médio',
    nome_exercicio: 'Analise Combinatoria',
    alternativas_corretas: '336 formas',
    alternativas_incorretas: (
        '222 formas',
        '320 formas',
        '380 formas'),
    texto_base: 'Em uma competição de xadrez existem 8 jogadores.',
    texto_comando: 'De quantas formas diferentes poderá ser formado o pódio (primeiro, segundo e terceiro lugares)?' 
}

let questão94= { 
    id: 94,
    nivel: 'Médio',
    nome_exercicio: 'Analise Combinatoria',
    alternativas_corretas: '24 combos',
    alternativas_incorretas: (
        '34 combos',
        '22 combos',
        '30 combos'),
    texto_base: 'Uma lanchonete tem uma promoção de combo com preço reduzido em que o cliente pode escolher 4 tipos diferentes de sanduíches, 3 tipos de bebida e 2 tipos de sobremesa.',
    texto_comando: 'Quantos combos diferentes os clientes podem montar?' 
}

let questão95= { 
    id: 95,
    nivel: 'Difícil',
    nome_exercicio: 'Analise Combinatoria',
    alternativas_corretas: '4 845 comissões',
    alternativas_incorretas: (
        ' 2 345 comissões',
        ' 3 485 comissões',
        ' 4 325 comissões'),
    texto_base: 'Quantas comissões de 4 elementos podemos formar',
    texto_comando: 'com 20 alunos de uma turma?' 
}

let questão96= { 
    id: 96,
    nivel: 'Difícil',
    nome_exercicio: 'Analise Combinatoria',
    alternativas_corretas: '10 alunos a mais do que possíveis respostas distintas',
    alternativas_incorretas: (
        '20 alunos a mais do que possíveis respostas distintas.',
        '119 alunos a mais do que possíveis respostas distintas.',
        '260 alunos a mais do que possíveis respostas distintas.',
        '270 alunos a mais do que possíveis respostas distintas.'),
    texto_base: '(ENEM) – O diretor de uma escola convidou os 280 alunos de terceiro ano a participarem de uma brincadeira. Suponha que existem 5 objetos e 6 personagens numa casa de 9 cômodos; um dos personagens esconde um dos objetos em um dos cômodos da casa. O objetivo da brincadeira é adivinhar qual objeto foi escondido por qual personagem e em qual cômodo da casa o objeto foi escondido. Todos os alunos decidiram participar. A cada vez um aluno é sorteado e dá a sua resposta.',
    texto_comando: 'As respostas devem ser sempre distintas das anteriores, e um mesmo aluno não pode ser sorteado mais de uma vez. Se a resposta do aluno estiver correta, ele é declarado vencedor e a brincadeira é encerrada.' 
}

let questão97= { 
    id: 97,
    nivel: 'médio',
    nome_exercicio: 'Analise Combinatoria',
    alternativas_corretas: '36',
    alternativas_incorretas: (
        '12',
        '18',
        '72',
        '108'),
    texto_base: '(Fuvest) – Três empresas devem ser contratadas para realizar quatro trabalhos distintos em um condomínio. Cada trabalho será atribuído a uma única empresa e todas elas devem ser contratadas.',
    texto_comando: 'De quantas maneiras distintas podem ser distribuídos os trabalhos?' 
}

let questão98= { 
    id: 98,
    nivel: 'Difícil',
    nome_exercicio: 'Analise Combinatoria',
    alternativas_corretas: '720',
    alternativas_incorretas: (
        '144',
        '575',
        '1040'),
    texto_base: '(UFMG) – Um clube resolve fazer uma Semana de Cinema. Para isso, os organizadores escolhem sete filmes, que serão exibidos um por dia. Mas, ao elaborar a programação, eles decidem que três desses filmes, que são de ficção científica, devem ser exibidos em dias consecutivos.',
    texto_comando: 'Nesse caso, o número de maneiras diferentes de fazer a programação dessa semana é:' 
}

let questão99= { 
    id: 99,
    nivel: 'Difícil',
    nome_exercicio: 'Analise Combinatoria',
    alternativas_corretas: '26.36^3',
    alternativas_incorretas: (
        '36^4',
        '10.36^3.',
        '26^4',
        ' 10.26^4'),
    texto_base: '(PUC-RJ) – A senha de acesso a um jogo de computador consiste em quatro caracteres alfabéticos ou numéricos, sendo o primeiro necessariamente alfabético.',
    texto_comando: 'O número de senhas possíveis será então:' 
}

let questão100= { 
    id: 100,
    nivel: 'Difícil',
    nome_exercicio: 'Analise Combinatoria',
    alternativas_corretas: '12!',
    alternativas_incorretas: (
        '11!',
        '10890',
        '7920',
        '40'),
    texto_base: '(Unesp) – O conselho administrativo de um sindicato é constituído por doze pessoas, das quais uma é o presidente deste conselho. A diretoria do sindicato tem quatro cargos a serem preenchidos por membros do conselho, sendo que o presidente da diretoria e do conselho não devem ser a mesma pessoa.',
    texto_comando: 'De quantas maneiras diferentes esta diretoria poderá ser formada?' 
}


let operacoesbasicas = {
    id: 4,
    nome:'Operações básicas'
}

let razãoproporcaoregradetres = {
    id: 5,
    nome:'Razão, proporção e regra de três'
}

let sistemametrico = {
    id: 6,
    nome:'Sistema métrico'
}

let funcaoafim = {
    id: 7,
    nome:'Função afim'
}

let introduçãofunção = {
    id: 8,
    nome:'Introdução à função'
}

let funcaoquadratica = {
    id: 9,
    nome:'Função Quadrática'
}

var numerosinteiros = {
    id: 10,
    nome:'Números Inteiros'
}

let noções_basica_da_estatistica = {
    id: 11,
    nome: 'Noções básicas de estatísticas'
}

let porcentagem = {
    id: 12,
    nome: 'Porcentagem'
}

let geometria_plana = {
    id: 13,
    nome: 'Geometria Plana'
}

let circunferência ={
    id: 14,
    nome: 'circunferência'
}

let analise_combinatoria={
    id: 15,
    nome: 'Analise Combinatoria'
}


let ciclodoaçucar = {
    id: 16,
    nome: 'Ciclo do açucar'
}

let crisedosistemacolonial = {
    id: 17,
    nome: 'Crise do sistema colonial'
}

let expançãoterritorial = {
    id: 18,
    nome: 'Expançao territorial'
}

let agricultura = {
    id: 19,
    nome: 'Agricultura'
}

let iniciodacolonização = {
    id: 20,
    nome: 'Inicio da colonização'
}
let précolonia = {
    id: 21,
    nome: 'Pré colônia'
}

let uniãoiberica = {
    id: 22,
    nome: 'União ibérica'
}

let primeiroreinado = {
    id: 23,
    nome: 'Primeiro Reinado'
}

let regência = {
    id: 24,
    nome: 'Regência'
}

let segundoreinado = {
    id: 25,
    nome: 'Segundo Reinado'
}

let antiguidadeoriental = {
    id: 26,
    nome: 'Antiguidade oriental'
}

let antiguidadeocidental = {
    id: 27,
    nome: 'Antiguidade ocidental'
}


let crisede29 = {
    id: 28,
    nome: 'Crise de 1929'
}

let guerrafria = {
    id: 29,
    nome: 'Guerra Fria'
}

let nazifacismo = {
    id: 30,
    nome: 'Nazifacismo'
}

let primeiraguerramundial = {
    id: 31,
    nome: 'Primeira guerra mundial'
}

let revolucaorussa = {
    id: 32,
    nome: 'Revolução russa'
}

let segundaguerramundial = {
    id: 33,
    nome: 'Segunda guerra mundial'
}

let introducaoaoptica = {
    id: 34,
    nome: 'Introdução à óptica'
}

let lentesevisao = {
    id: 35,
    nome: 'Lentes e visão'
}

let reflexaodaluz = {
    id: 36,
    nome: 'Reflexão da luz'
}

let refracaodaluz = {
    id: 37,
    nome: 'Refração da luz'
}

let Ecologia={
    id: 38,
    nome: 'Ecologia'
}

let termometria = {
    id: 39,
    nome: 'Termometria'
}

let Genética = {
    id: 40,
    nome: 'Genética'
}

let Fisiologia_Animal = {
    id: 41,
    nome: 'Fisiologia_Animal'
}

let Evolução = {
    id: 42,
    nome: 'Evolução'
}

let Parasitologia = {
    id: 43,
    nome: 'Parasitologia'
}

let Cultura = {
    id: 44,
    nome: 'Cultura'
}

let Cidadania = {
    id: 45,
    nome: 'Cidadania'
}

let Movimentos_Sociais = {
    id: 46,
    nome: 'Movimentos_Sociais'
}

let Política = {
    id: 47,
    nome: 'Política'
}

let Estado = {
    id: 48,
    nome: 'Estado'
}

let Governo = {
    id: 49,
    nome: 'Governo'
}

let Revolução_Científica_e_Industrial = {
    id: 50,
    nome: 'Revolução_Científica_e_Industrial'
}

let Sociedade_Contemporânea = {
    id: 51,
    nome: 'Sociedade_Contemporânea'
}

let Teorias_Sociológicas = {
    id: 52,
    nome: 'Teorias_Sociológicas'
}

let Marxismo = {
    id: 53,
    nome: 'Marxismo'
}

let absolutismo= {
    id: 54,
    nome: 'Absolutismo'
}

let civilizações_pré-colombianas = {
    id: 55,
    nome: 'Civilizaçõe pré-colombianas'
}

let incas = {
    id: 56,
    nome: 'Incas'
}

let maias= {
    id: 57,
    nome: 'Maias'
}

let Astecas = {
    id: 58,
    nome: 'Astecas'
}

 let Era_Vargas= {
    id: 59,
    nome: 'Era Vargas'
}

let Ditadura_Militar= {
    id: 60,
    nome: 'Ditadura Militar'
}

let ética_e_juntiça = {
    id: 61,
    nome: 'Ética e Justiça'
}

let Natureza_do_conhecimento= {
    id: 62,
    nome: 'Natureza do conhecimento'
}

let Democracia_e_Cidadania = {
    id: 63,
    nome: 'Democracia e Cidadania'
}

let Filosofia Contemporânea = {
    id: 64,
    nome: 'Filosofia Contemporânea'
}

let Filosofia_Moderna = {
    id: 65,
    nome: 'Filosofia Moderna'
}

let teoria_do_conhecimento = {
    id: 66,
    nome: 'Teoria do Conhecimento'
}

let Filosofia_da_Linguagem = {
    id: 67,
    nome: 'Filosofia da Linguagem'
}

let Lógica = {
    id: 68,
    nome: 'Lógica'
}

let pré-socráticos = {
    id: 69,
    nome: 'pré-socráticos'
}

let Epistemologia = {
    id: 70,
    nome: 'Epistemologia'
}




let artes = {
    id: 2,
    nome: 'Artes',
    area_de_conhecimento: 'Linguagens'
}

let biologia = {
    id: 3,
    nome: 'Biologia',
    area_de_conhecimento: 'Ciências da natureza'
}

let fisica = {
    id: 4,
    nome: 'Física',
    area_de_conhecimento: 'Ciências da natureza'
}

let quimica = {
    id: 5,
    nome: 'Química',
    area_de_conhecimento: 'Ciências da natureza'
}

let filosofia = {
    id: 6,
    nome: 'Filosofia',
    area_de_conhecimento: 'Ciências humanas'
}

let sociologia = {
    id: 7,
    nome: 'Sociologia',
    area_de_conhecimento: 'Ciências humanas'
}

let geografia = {
    id: 8,
    nome: 'Geografia',
    area_de_conhecimento: 'Ciências humanas'
}

let historia = {
    id: 9,
    nome: 'História',
    area_de_conhecimento: 'Ciências humanas'
}

let portugues = {
    id: 10,
    nome: 'Português',
    area_de_conhecimento: 'Linguagens'
}

let literatura = {
    id: 11,
    nome: 'Literatura',
    area_de_conhecimento: 'Linguagens'
}

let ingles = {
    id: 12,
    nome: 'Inguês',
    area_de_conhecimento: 'Linguagens'
}

let espanhol = {
    id: 13,
    nome: 'Espanhol',
    area_de_conhecimento: 'Linguagens'
}

let redacao = {
    id: 14,
    nome: 'Redação',
    area_de_conhecimento: 'Linguagens'
}

let BIOQUÍMICA = {
    id: 15,
    nome: 'BIOQUÍMICA',
    area_de_conhecimento: 'Biologia'
}

let ANATOMIA_SISTÊMICA = {
    id: 16,
    nome: 'ANATOMIA_SISTÊMICA',
    area_de_conhecimento: 'Anatomia'
}

let INTRODUÇÃO_À_PESQUISA = {
    id: 17,
    nome: 'INTRODUÇÃO_À_PESQUISA',
    area_de_conhecimento: 'Linguagens'
}

let ATENDIMENTO_PRÉHOSPITALAR_E_PRIMEIROS_SOCORROS = {
    id: 18,
    nome: 'ATENDIMENT_PRÉHOSPITALAR_E_PRIMEIROS_SOCORROS',
    area_de_conhecimento: 'Medicina'
}

let BIOLOGIA_CELULAR_APLICADA_A_MEDICINA = {
    id: 19,
    nome: 'BIOLOGIA_CELULAR_APLICADA_A_MEDICINA',
    area_de_conhecimento: 'Medicina'
}

let EMBRIOLOGIA_MÉDICA = {
    id: 20,
    nome: 'EMBRIOLOGIA_MÉDICA',
    area_de_conhecimento: 'EMBRIOLOGIA'
}

let CIÊNCIAS_SOCIAIS = {
    id: 21,
    nome: 'CIÊNCIAS_SOCIAIS',
    area_de_conhecimento: 'Ciências'
}

let IMUNOLOGIA_MÉDICA = {
    id: 22,
    nome: 'IMUNOLOGIA_MÉDICA',
    area_de_conhecimento: 'Medicina'
}

let BIOFÍSICA_E_FISIOLOGIA = {
    id: 23,
    nome: 'BIOFÍSICA_E_FISIOLOGIA',
    area_de_conhecimento: 'Biofísica'
}

let INICIAÇÃO_ÀATENÇÃO_PRIMÁRIAÀ_SAÚDE = {
    id: 24,
    nome: 'INICIAÇÃO_ÀATENÇÃO_PRIMÁRIAÀ_SAÚDE',
    area_de_conhecimento: 'Medicina'
}

let NEUROANATOMIA_MÉDICA = {
    id: 25,
    nome: 'NEUROANATOMIA_MÉDICA',
    area_de_conhecimento: 'Medicina'
}

let HISTOFISIOLOGIA_DOS_SISTEMAS = {
    id: 26,
    nome: 'HISTOFISIOLOGIA_DOS_SISTEMAS',
    area_de_conhecimento: 'Sistemas'
}

let BASES_HUMANÍSTICAS_E_INTRODUCAO_A_PSICOLOGIA = {
    id: 27,
    nome: 'BASES_HUMANÍSTICAS_E_INTRODUCAO_A_PSICOLOGIA',
    area_de_conhecimento: 'Psicologia'
}

let FARMACOLOGIA = {
    id: 28,
    nome: 'FARMACOLOGIA',
    area_de_conhecimento: 'Farmacia'
}

let Introdução ao Direito. = {
    id: 29,
    nome: 'Introdução ao Direito',
    area_de_conhecimento: 'Direito'
}

let Português Jurídico = {
    id: 30 ,
    nome: 'Português Jurídico',
    area_de_conhecimento: 'Direito'
}

let Direito Constitucional = {
    id: 31,
    nome: 'Direito Constitucional',
    area_de_conhecimento: 'Direito'
}

let Direito Administrativo = {
    id: 32,
    nome: 'Direito Administrativo',
    area_de_conhecimento: 'Direito'
}

let Direito Civil = {
    id: 33,
    nome: 'Direito Civil',
    area_de_conhecimento: 'Direito'
}

let Direito Tributário = {
    id: 34,
    nome: 'Direito Tributário',
    area_de_conhecimento: 'Direito'
}

let Direito Penal = {
    id: 35,
    nome: 'Direito Penal',
    area_de_conhecimento: 'Direito'
}

let  Prática Jurídica = {
    id: 36,
    nome: ' Prática Jurídica',
    area_de_conhecimento: 'Direito'
}

let Introdução a Programação = {
    id: 37,
    nome: 'Introdução a Programação',
    area_de_conhecimento: 'TI'
}

let Sistemas Digitais = {
    id: 38,
    nome: 'Sistemas Digitais',
    area_de_conhecimento: 'TI'
}

let Introdução a Programação Assembly = {
    id: 39,
    nome: 'Introdução a Programação Assembly',
    area_de_conhecimento: 'TI'
}

let Estrutura de Dados = {
    id: 40,
    nome: 'Estrutura de Dados ',
    area_de_conhecimento: 'TI'
}

let Arquitetura de Computadores = {
    id: 41,
    nome: 'Arquitetura de Computadores',
    area_de_conhecimento: 'TI'
}

let Análise de Algoritmos = {
    id: 42,
    nome: 'Análise de Algoritmos',
    area_de_conhecimento: 'TI'
}

let Inteligência Artificial I = {
    id: 43,
    nome: 'Inteligência Artificial I',
    area_de_conhecimento: 'TI'
}

async function sincronizar (){
    await conexao.sync({force:true});
    await inserirExercicio(questão8);
    await inserirExercicio(questão9);
    await inserirExercicio(questão10);
    await inserirExercicio(questão11);
    await inserirExercicio(questão12);
    await inserirExercicio(questão13);
    await inserirExercicio(questão14);
    await inserirExercicio(questão15);
    await inserirExercicio(questão16);
    await inserirExercicio(questão17);
    await inserirExercicio(questão18);
    await inserirExercicio(questão19);
    await inserirExercicio(questão20);
    await inserirExercicio(questão21);
    await inserirExercicio(questão22);
    await inserirExercicio(questão23);
    await inserirExercicio(questão24);
    await inserirExercicio(questão25);
    await inserirExercicio(questão26);
    await inserirExercicio(questão27);
    await inserirExercicio(questão28);
    await inserirExercicio(questão29);
    await inserirExercicio(questão30);
    await inserirExercicio(questão31);
    await inserirExercicio(questão32);
    await inserirExercicio(questão33);
    await inserirExercicio(questão34);
    await inserirExercicio(questão35);
    await inserirExercicio(questão36);
    await inserirExercicio(questão37);
    await inserirExercicio(questão38);
    await inserirExercicio(questão39);
    await inserirExercicio(questão40);
    await inserirExercicio(questão41);
    await inserirExercicio(questão42);
    await inserirExercicio(questão43);
    await inserirExercicio(questão44);
    await inserirExercicio(questão45);
    await inserirExercicio(questão46);
    await inserirExercicio(questão47);
    await inserirExercicio(questão48);
    await inserirExercicio(questão49);
    await inserirExercicio(questão50);
    await inserirExercicio(questão51);
    await inserirExercicio(questão52);
    await inserirExercicio(questão53);
    await inserirExercicio(questão54);
    await inserirExercicio(questão56);
    await inserirExercicio(questão57);
    await inserirExercicio(questão58);
    await inserirExercicio(questão59);
    await inserirExercicio(questão60);
    await inserirExercicio(questão61);
    await inserirExercicio(questão62);
    await inserirExercicio(questão63);
    await inserirExercicio(questão64);
    await inserirExercicio(questão65);
    await inserirExercicio(questão66);
    await inserirExercicio(questão67);
    await inserirExercicio(questão68);
    await inserirExercicio(questão69);
    await inserirExercicio(questão70);
    await inserirExercicio(questão71);
    await inserirExercicio(questão72);
    await inserirExercicio(questão73);
    await inserirExercicio(questão74);
    await inserirExercicio(questão75);
    await inserirExercicio(questão76);
    await inserirExercicio(questão77);
    await inserirExercicio(questão78);
    await inserirExercicio(questão79);
    await inserirExercicio(questão80);
    await inserirExercicio(questão81);
    await inserirExercicio(questão82);
    await inserirExercicio(questão83);
    await inserirExercicio(questão84);
    await inserirExercicio(questão85);
    await inserirExercicio(questão86);
    await inserirExercicio(questão87);
    await inserirExercicio(questão88);
    await inserirExercicio(questão89);
    await inserirExercicio(questão90);
    await inserirExercicio(questão91);
    await inserirExercicio(questão92);
    await inserirExercicio(questão93);
    await inserirExercicio(questão94);
    await inserirExercicio(questão95);
    await inserirExercicio(questão96);
    await inserirExercicio(questão97);
    await inserirExercicio(questão98);
    await inserirExercicio(questão99);
    await inserirExercicio(questão100);

    await inserirAssunto(fracoes);
    await inserirAssunto(funcaoafim);
    await inserirAssunto(funcaoquadratica);
    await inserirAssunto(numerosnaturais);
    await inserirAssunto(sistemametrico);
    await inserirAssunto(operacoesbasicas);
    await inserirAssunto(razãoproporcaoregradetres);
    await inserirAssunto(equacaodoprimeirograu);
    await inserirAssunto(numerosinteiros);
    await inserirAssunto(noções_basica_da_estatistica);
    await inserirAssunto(porcentagem);
    await inserirAssunto(geometria_plana);
    await inserirAssunto(circunferência);
    await inserirAssunto(analise_combinatoria);
    await inserirAssunto(ciclodoaçucar);
    await inserirAssunto(crisedosistemacolonial);
    await inserirAssunto(expançãoterritorial);
    await inserirAssunto(iniciodacolonização);
    await inserirAssunto(précolonia);
    await inserirAssunto(uniãoiberica);
    await inserirAssunto(primeiroreinado);
    await inserirAssunto(segundoreinado);
    await inserirAssunto(regência);
    await inserirAssunto(antiguidadeocidental);
    await inserirAssunto(crisede29);
    await inserirAssunto(guerrafria);
    await inserirAssunto(nazifacismo);
    await inserirAssunto(primeiraguerramundial);
    await inserirAssunto(revolucaorussa);
    await inserirAssunto(segundaguerramundial);
    await inserirAssunto(introducaoaoptica);
    await inserirAssunto(lentesevisao);
    await inserirAssunto(reflexaodaluz);
    await inserirAssunto(refracaodaluz);
    await inserirAssunto(termometria);
    await inserirAssunto(antiguidadeoriental);
    await inserirAssunto(agricultura);
    await inserirAssunto(Ecologia);
    await inserirAssunto(Genética);
    await inserirAssunto(Fisiologia_Animal);
    await inserirAssunto(Evolução);
    await inserirAssunto(Parasitologia);
    await inserirAssunto(Cultura);
    await inserirAssunto(Cidadania);
    await inserirAssunto(Movimentos_Sociais);
    await inserirAssunto(Política);
    await inserirAssunto(Estado);
    await inserirAssunto(Governo);
    await inserirAssunto(Revolução_Científica_e_Industrial);
    await inserirAssunto(Sociedade_Contemporânea);
    await inserirAssunto(Teorias_Sociológicas);
    await inserirAssunto(Marxismo);
    await inserirAssunto(Absolutismo);
    await inserirAssunto(Civilizações pré-colombianas);
    await inserirAssunto(Incas);
    await inserirAssunto(Maias);
    await inserirAssunto(Astecas);
    await inserirAssunto(Era Vargas);
    await inserirAssunto(Ditadura_Militar);
    await inserirAssunto(Ética e Justiça);
    await inserirAssunto(Natureza_do_conhecimento);
    await inserirAssunto(Democracia_e_Cidadania);
    await inserirAssunto(Filosofia Contemporânea);
    await inserirAssunto(Filosofia_Moderna);
    await inserirAssunto(teoria_do_conhecimento);
    await inserirAssunto(Filosofia_da_Linguagem);
    await inserirAssunto(Lógica);
    await inserirAssunto(Pré-socráticos);
    await inserirAssunto(Epistemologia);

    await inserirDisciplina(artes);
    await inserirDisciplina(portugues);
    await inserirDisciplina(literatura);
    await inserirDisciplina(geografia);
    await inserirDisciplina(historia);
    await inserirDisciplina(filosofia);
    await inserirDisciplina(sociologia);
    await inserirDisciplina(biologia);
    await inserirDisciplina(quimica);
    await inserirDisciplina(fisica);
    await inserirDisciplina(ingles);
    await inserirDisciplina(espanhol);
    await inserirDisciplina(redacao);
    await inserirDisciplina(BIOQUÍMICA);
    await inserirDisciplina(ANATOMIA_SISTÊMICA);
    await inserirDisciplina(INTRODUÇÃO_À_PESQUISA);
    await inserirDisciplina(ATENDIMENTO_PRÉHOSPITALAR_E_PRIMEIROS_SOCORROS);
    await inserirDisciplina(BIOLOGIA_CELULAR_APLICADA_A_MEDICINA);
    await inserirDisciplina(EMBRIOLOGIA_MÉDICA);
	  await inserirDisciplina(IMUNOLOGIA_MÉDICA);
    await inserirDisciplina(BIOFÍSICA_E_FISIOLOGIA);
    await inserirDisciplina(INICIAÇÃO_ÀATENÇÃO_PRIMÁRIAÀ_SAÚDE);
    await inserirDisciplina(NEUROANATOMIA_MÉDICA);
    await inserirDisciplina(HISTOFISIOLOGIA_DOS_SISTEMAS);
    await inserirDisciplina(BASES_HUMANÍSTICAS_E_INTRODUCAO_A_PSICOLOGIA);
    await inserirDisciplina(FARMACOLOGIA);
    await inserirDisciplina(Introdução ao Direito);
    await inserirDisciplina(Português Jurídico);
    await inserirDisciplina(Direito Constitucional);
    await inserirDisciplina(Direito Administrativo);
    await inserirDisciplina(Direito Civil);
    await inserirDisciplina(Direito Tributário);
    await inserirDisciplina(Direito Penal);
    await inserirDisciplina(Prática Jurídica);
    await inserirDisciplina(Introdução a Programação);
    await inserirDisciplina(Sistemas Digitais);
    await inserirDisciplina(Introdução a Programação Assembly I);
    await inserirDisciplina(Estrutura de Dados);
    await inserirDisciplina(Arquitetura de Algoritmos);
    await inserirDisciplina(Inteligência Artificial);
    //await inserirDisciplina(mat);
}

async function inserirAssunto (objeto){
    let r = await Assunto.create(objeto);
    console.log(r);
}

async function inserirDisciplina (objeto){
    let r = await Disciplina.create(objeto);
    console.log(r);
}

async function inserirExercicio (objeto){
    let r = await Exercicio.create(objeto);
    console.log(r);
}

async function consultar (){
    let r = await Pizza.findAll();
    console.log(r);
}