import { Component, OnInit } from '@angular/core';
import { Livro } from '../Livros';
import { FavoriteBooksService } from '../favorite-books.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(private favoriteBooksService: FavoriteBooksService) {}
  livros: Livro[] = [
    { id: 1, titulo: 'É assim que acaba', autor: 'Collen Hoover', capa: "assets/icon/eassimqueacaba.jpg",
     descricao: 'Em É assim que acaba , Colleen Hoover nos apresenta Lily, uma jovem que se mudou de uma cidadezinha do Maine para Boston, se formou em marketing e abriu a própria floricultura. E é em um dos terraços de Boston que ela conhece Ryle, um neurocirurgião confiante, teimoso e talvez até um pouco arrogante, com uma grande aversão a relacionamentos, mas que se sente muito atraído por ela.Quando os dois se apaixonam, Lily se vê no meio de um relacionamento turbulento que não é o que ela esperava. Mas será que ela conseguirá enxergar isso, por mais doloroso que seja?'},
    
    { id: 2, titulo: 'Com sangue', autor: 'Stephe King', capa: "assets/icon/stephenkingcomsangue.jpg",
     descricao: 'Brilhante em narrativas curtas, King já escreveu alguns contos que viraram sucesso em todo o mundo, como as histórias que inspiraram os filmes Conta comigo e Um sonho de liberdade. Neste livro, assim como em Quatro estações e Escuridão total sem estrelas, ele cria uma coleção única e emocionante, demonstrando mais uma vez por que é considerado um dos maiores contadores de histórias de todos os tempos. Este é um livro sobre amor, amizade, talento e justiça… em suas formas mais deturpadas. Em Com sangue, Stephen King reúne quatro contos com protagonistas inteligentes e complexos, que têm sua vida comum transformada por algum elemento inexplicável.'},
    
    { id: 3, titulo: '1984', autor: 'George Orwell', capa: "assets/icon/1984.jpg",
     descricao: 'Winston, herói de 1984 , último romance de George Orwell, vive aprisionado na engrenagem totalitária de uma sociedade completamente dominada pelo Estado, onde tudo é feito coletivamente, mas cada qual vive sozinho. Ninguém escapa à vigilância do Grande Irmão, a mais famosa personificação literária de um poder cínico e cruel ao infinito, além de vazio de sentido histórico. De fato, a ideologia do Partido dominante em Oceânia não visa nada de coisa alguma para ninguém, no presente ou no futuro. OBrien, hierarca do Partido, é quem explica a Winston que "só nos interessa o poder em si. Nem riqueza, nem luxo, nem vida longa, nem felicidade: só o poder pelo poder, poder puro'},
    
    { id: 4, titulo: 'Nunca saia sozinho', autor: 'Charlie Donlea', capa: "/assets/icon/nuncasaiasozinho.jpg",
     descricao: 'SE ACEITAR O CONVITE, NÃO IGNORE O AVISO. Dentro dos muros de uma escola de elite as expectativas são altas, e as regras, rígidas. Na floresta, além do campus bem cuidado, há uma pensão abandonada que é utilizada pelos alunos como ponto de encontro noturno. Para quem entra, existe apenas uma regra: não deixe sua vela apagar ― a menos que você queira encontrar o Homem do Espelho... Há um ano, dois estudantes foram mortos em um massacre terrível. Desde então, o caso se tornou o foco do podcast “A casa dos suicídios”. Embora um professor tenha sido condenado pelos assassinatos, muitos mistérios e perguntas permanecem. O mais urgente é: por que tantos alunos que sobreviveram àquela noite macabra voltaram ao lugar para se matar? Rory Moore, especialista em casos arquivados, e seu parceiro, Lane Philips, começam a investigar a noite dos assassinatos, em busca de pistas que possam ter escapado da escola e da polícia. Porém, quanto mais descobrem sobre os alunos e aquele jogo perigoso que deu errado, eles se convencem de que algo fora do normal ainda está acontecendo. O jogo não acabou. Ele prospera... em segredo, em silêncio. E, para seus jogadores, pode não haver uma maneira de vencer ou de sobreviver.'},
    
    { id: 5, titulo: 'Fortaleza Digital', autor: 'Dan Brown', capa: "/assets/icon/fortalezadigital.jpg",
     descricao: 'Responsável por monitorar as comunicações de todo o planeta e proteger informações do governo dos Estados Unidos, a ultrassecreta NSA, a Agência de Segurança Nacional americana, investiu às escondidas numa arma revolucionária para combater a ação de grupos terroristas na era da informática. Seu trunfo é o supercomputador TRANSLTR, capaz de decifrar em poucos minutos qualquer mensagem encriptada enviada pela Internet. Quando o infalível TRANSLTR é paralisado por um misterioso código, a agência convoca a chefe do Departamento de Criptografia, a matemática Susan Fletcher, para investigar o que está acontecendo.'},
    
    { id: 6, titulo: 'Origem', autor: 'Dan Brown', capa: "/assets/icon/origem.jpg",
     descricao: 'O brilhante ex-aluno de Langdon está prestes a revelar um segredo que promete abalar os alicerces das religiões e mudar a face da ciência ao responder a duas perguntas fundamentais da existência humana: DE ONDE VIEMOS? PARA ONDE VAMOS?. De repente, a apresentação se transforma em um caos, e a preciosa descoberta de Kirsch pode ser perdida para sempre. Diante de uma ameaça iminente, Langdon tenta uma fuga desesperada de Bilbao ao lado de Ambra Vidal, a diretora do museu. Juntos, eles seguem para Barcelona à procura de uma senha que ajudará a desvendar o segredo de Kirsch.'},
    
    { id: 7, titulo: 'Nada Ortodoxa', autor: 'Deborah Feldman', capa: "/assets/icon/nadaortodoxa.jpg",
     descricao: 'Deborah Feldman cresceu sob um código de costumes rígidos, que regulavam praticamente tudo que dizia respeito à sua vida, desde o que ela poderia vestir e com quem poderia falar, até o que lhe era permitido ler. Integrante de um grupo de judeus hassídicos ― corrente ultraortodoxa da religião ― e criada pelos avós, cuja lealdade às tradições muitas vezes intrigava a mente curiosa da jovem, Deborah escondia volumes de Jane Austen e Louisa May Alcott para imaginar uma vida alternativa entre os arranha-céus de Manhattan. Ao fim da adolescência, submetida a um aspecto comum a diversas tradições conservadoras, Deborah se vê presa em um casamento disfuncional com um homem que mal conhece. O isolamento e a intransigência da comunidade deixam o jovem casal despreparado para o relacionamento, bem como para as responsabilidades paternas que se seguem. Quando consegue enfim se afastar do bairro onde sempre morou e organizar uma rotina com algumas liberdades, a tensão entre os desejos e os compromissos religiosos de Deborah aumenta. Até que, farta de ver o marido colocar a estrita observância da tradição acima do bem-estar da família, ela decide abandonar tudo que um dia chamou de vida.'},
    
    { id: 8, titulo: 'O processo', autor: 'Franz Kafka', capa: "/assets/icon/oprocesso.jpg",
     descricao: 'A história de Josef K. atravessa os anos sem perder nada do seu vigor. Ao contrário, a banalização da violência irracional no século XX acrescentou a ela o fascínio dos romances realistas. Na sua luta para descobrir por que o acusam, por quem é acusado e que lei ampara a acusação, K. defronta permanentemente com a impossibilidade de escolher um caminho que lhe pareça sensato ou lógico, pois o processo de que é vítima segue leis próprias: as leis do arbítrio.'},
    
    { id: 9, titulo: 'Crime e Castigo', autor: 'Fiódor Dostoiévski', capa: "/assets/icon/crimeecastigo.jpg",
     descricao: '"Crime e castigo" é um daqueles romances universais que, concebidos no decorrer do romântico século XIX, abriram caminhos ao trágico realismo literário dos tempos modernos. Contando nele a soturna história de um assassino em busca de redenção e ressurreição espiritual, Dostoiévski chegou a explorar, como nenhum outro escritor de sua época, as mais diversas facetas da psicologia humana sujeita a abalos e distorções e, desse modo, criou uma obra de imenso valor artístico, merecidamente cultuada em todas as partes do mundo. O fascinante efeito que produz a leitura de "Crime e castigo" - angústia, revolta e compaixão renovadas a cada página com um desenlace aliviador - poderia ser comparado à catarse dos monumentais dramas gregos.'},
    
    { id: 11, titulo: 'Viagem ao centro da terra', autor: 'Julio verne', capa: "/assets/icon/viagemaocentrodaterra.jpg",
     descricao: 'Um renomado cientista alemão decifra o enigma contido em um manuscrito de setecentos anos que descreve uma viagem ao centro da Terra, e tamanha façanha o instiga a embarcar na mesma aventura. A partir daí, a narrativa envolvente de Verne vai convidar o leitor a acompanhar uma aventura repleta de personagens instigantes, florestas misteriosas e criaturas fantásticas na jornada científica mais ousada do século XIX!'},
    
    { id: 12, titulo: 'A droga do amor', autor: 'Pedro Bandeira', capa: "/assets/icon/adrogadoamor.jpg",
     descricao: 'Um cientista americano, que havia criado a cura para a praga do século, o mal que transformam o amor em morte, é sequestrado no Brasil. Magrí e Chumbinho tentam reunir a turma secreta dos Karas para investigar esse crime tão tremendo para a humanidade. Mas Miguel, Calu e Crânio, por não querer disputar entre si o amor por Magrí, decidem terminar com os Karas... Para agravar a situação, o Doutor Q.I., o rei dos criminosos, foge da Penitenciária de Segurança Máxima... Magrí, a única menina da turma, é quem afronta todos os riscos para desvendar esta trama eletrizante! Esse é mais um trabalho para os Karas: o avesso dos coroas, o contrário dos caretas!' },
  
     { id: 13, titulo: 'Orgulho e preconceito', autor: 'Jane Austen', capa: "/assets/icon/orgulhoepreconceito.jpg",
     descricao: 'Orgulho e Preconceito é um dos mais aclamados romances da escritora inglesa Jane Austen. Publicado em 1813, revela como era a sociedade da época, quando os relacionamentos se desenrolavam de maneira mais lenta e romântica, no ritmo das cartas levadas por mensageiros a cavalo. Nesse mundo, o sonho da Sra. Bennet era casar bem suas cinco filhas: Jane, Elizabeth, Mary, Kitty e Lydia. Entre as irmãs, destaca-se Elizabeth, a Lizzy, que se depara com um turbilhão de sentimentos diante do orgulho e preconceito que mascaram a realidade. Trata-se de um clássico que, mesmo após duzentos anos desde a sua primeira publicação, continua a encantar milhões de leitores ao redor do mundo.' },
  
     { id: 14, titulo: 'A arte da guerra', autor: 'Sun Tzu', capa: "/assets/icon/aartedaguerra.jpeg",
     descricao: 'O que faz de um tratado militar, escrito por volta de 500 a.C., manter-se atual a ponto de ser publicado praticamente no mundo todo até os dias de hoje? Você verá que, em A arte da guerra, as estratégias transmitidas pelo general chinês Sun Tzu carregam um profundo conhecimento da natureza humana. Elas transcendem os limites dos campos de batalha e alcançam o contexto das pequenas ou grandes lutas cotidianas, sejam em ambientes competitivos – como os do mundo corporativo – sejam nos desafios internos, em que temos de encarar nossas próprias dificuldades. Se você não conhece a si mesmo nem o inimigo, sucumbirá a todas as batalhas. Sun Tzu'},
    
     { id: 15, titulo: 'Oito assassinatos perfeitos', autor: 'Peter Swanson', capa: "/assets/icon/oitoassassinatosperfeitos.jpg",
     descricao: 'Na trama, um livreiro se vê envolvido em uma investigação do FBI, pois um assassino dotado de uma mente doentia e brilhante passa a seguir sua lista com os assassinatos mais engenhosos da ficção policial. Há algum tempo, antes de se tornar sócio da Livraria Old Devils, localizada em Boston – uma meca para os fãs de mistério –, o aficionado por romances policiais, Malcolm Kershaw, também conhecido como Mal, escreveu um artigo para o blog da livraria com uma lista dos assassinatos literários mais insolúveis, quase impossíveis de serem decifrados – que ele chamou de “Oito Assassinatos Perfeitos”. Para surpresa de Mal, Gwen Mulvey, uma agente do FBI, bate à sua porta em um dia de inverno em fevereiro. Ela quer sua ajuda para desvendar uma possível relação dessa antiga lista com uma série de assassinatos não solucionados. E Gwen não é a única que tem interesse por esse livreiro... O assassino está lá fora, observando cada um de seus passos.' },
    
     { id: 16, titulo: 'Olhos vazios', autor: 'Charlie Donlea', capa: "/assets/icon/olhosvazios.jpg",
     descricao: 'ELA MUDOU O NOME E A APARÊNCIA... MAS NADA PODE APAGAR O QUE TESTEMUNHOU. Alex Armstrong mudou tudo sobre si mesma: seu nome, sua aparência, sua história. Ela não é mais a adolescente aterrorizada que apareceu na TV, algemada, sendo conduzida da casa onde vivia até a noite em que sua família foi massacrada. Apelidada de Olhar Vazio pela imprensa, ela foi acusada dos assassinatos, teve a vida duramente exposta pelos veículos de comunicação, mas lutou com todas as suas forças para limpar o seu nome. Dez anos se passaram e Alex nunca parou de procurar pela verdade, mesmo tendo de esconder sua identidade da horda de fanáticos por crimes reais e repórteres desesperados por qualquer notícia sobre seu paradeiro. Agora como investigadora, ela trabalha incansavelmente para garantir justiça para outros acusados. Pessoas como Matthew Claymore, que é suspeito do desaparecimento da namorada, uma estudante de jornalismo chamada Laura McAllister. Laura estava prestes a divulgar uma grande história sobre estupro e acobertamentos em sua faculdade. Alex acredita que Matthew é inocente e descobre revelações impressionantes sobre o corpo docente da universidade, alunos e pais poderosos dispostos a fazer qualquer coisa para proteger os filhos. Mas ao iniciar sua investigação, Alex encontra conexões surpreendentes com o assassinato da própria família. Por mais diferentes que os crimes possam parecer... *** Este é um thriller explosivo que você não conseguirá largar.' },
    
    
    
    
    
    
    
    
    
    
    
    
    
    ];
  
  filterBooks(event: any): void {
    const searchText = event.target.value.toLowerCase();
    
    console.log("Texto de pesquisa:", searchText); // Adiciona um log para verificar o texto de pesquisa

    this.filteredBooks = this.livros.filter((livro) =>
        livro.titulo.toLowerCase().includes(searchText) ||
        livro.autor.toLowerCase().includes(searchText)
    );
    
    console.log("Livros filtrados:", this.filteredBooks); // Adiciona um log para verificar os resultados filtrados
}

  searchText: string = '';
  filteredBooks: Livro[] = this.livros;

  Clicou(livro: Livro): void {
    alert(`Titulo: ${livro.titulo}\nAutor: ${livro.autor}\nCapa: ${livro.capa}\nDescrição: ${livro.descricao}`);
  }

  adicionarFavorito(livro: Livro) {
    this.favoriteBooksService.adicionarLivro(livro);
    alert(`O livro "${livro.titulo}" foi adicionado à lista de favoritos!`);
}

  ngOnInit() {

  }

}
