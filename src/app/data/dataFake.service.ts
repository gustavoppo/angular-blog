import { Injectable } from '@angular/core';

export type DataFakeIndex = {
  id: number;
  title: string;
  description: string;
  photoCover: string;
};

@Injectable({
  providedIn: 'root',
})
export class dataFake {
  dataFakeIndex: DataFakeIndex[] = [];
  constructor() {
    this.dataFake();
  }

  private dataFake(): void {
    this.dataFakeIndex = [
      {
        id: 1,
        title: 'NOVO HOMEM DE FERRO EM 3D',
        description:
          'Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores. Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime.',
        photoCover:
          'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F51FA9F6CBD9F0C9B1394B1CC0A6A842D07091318674E234CD33CBF7C28CDC3/scale?width=1200&aspectRatio=1.78&format=jpeg',
      },
      {
        id: 2,
        title: 'Dois irmãos: Uma Jornada Fantástica',
        description: 'Na animação da Disney, Dois Irmãos: Uma Jornada Fantástica, em um local onde as coisas fantásticas parecem ficar cada vez mais distantes de tudo, dois irmãos elfos adolescentes embarcam em uma extraordinária jornada para tentar redescobrir a magia do mundo ao seu redor.',
        photoCover:
          'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A6120483BD4B2A98ACA06B27FC2AF0ABAD94AD8AA938049D7EAEE1FA3166AB6B/scale?width=400&aspectRatio=1.78&format=jpeg',
      },
      {
        id: 3,
        title: 'Novo filme do pantera negra lançado em breve',
        description: `Em Pantera Negra, após a morte do rei T Chaka (John Kani), o príncipe T'Challa (Chadwick Boseman) retorna a Wakanda para a cerimônia de coroação. Nela são reunidas as cinco tribos que compõem o reino, sendo que uma delas, os Jabari, não apoia o atual governo. T'Challa logo recebe o apoio de Okoye (Danai Gurira), a chefe da guarda de Wakanda, da irmã Shuri (Letitia Wright), que coordena a área tecnológica do reino, e também de Nakia (Lupita Nyong'o), a grande paixão do atual Pantera Negra, que não quer se tornar rainha. Juntos, eles estão à procura de Ulysses Klaue (Andy Serkis), que roubou de Wakanda um punhado de vibranium, alguns anos atrás.`,
        photoCover:
          'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/35720ACD323F927C3A83D809D0F460BD3651740DA519BCC184B6F042057EA14D/scale?width=1200&aspectRatio=1.78&format=jpeg',
      },
      {
        id: 4,
        title: 'Novo filme dos X-men está em pós produção, afirma diretor',
        description: 'Em um futuro próximo há pessoas que são o próximo degrau na escada evolucionária humana, os mutantes. Dotados de um fator X em sua carga genética, cada mutante desenvolve um tipo diferente de poder e muitas vezes precisam aprender a controlá-lo, pois só se manifesta na adolescência ou mesmo quando se tornam adultos. Os mutantes sofrem um grande preconceito, pois os humanos em geral não entendem os poderes deles e temem que os mutantes, por serem superiores às pessoas comuns, irão perseguir a raça humana. Do lado dos mutantes, o combate a esse preconceito não acontece de modo uniforme. Alguns mutantes, os X-Men, são liderados pelo Professor Xavier (Patrick Stewart), um telepata, e pretendem vencer o preconceito por meios pacíficos, convencendo o público de que humanos e mutantes podem conviver em paz. No entanto a Irmandade dos Mutantes, comandada pelo temível Magneto (Ian McKellen), que pode alterar e modificar a estrutura dos metais, declarou guerra aos humanos, pois está cansado de tanta perseguição e humilhação. O ódio e o medo que os humanos sentem pelos mutantes está à beira do fanatismo, principalmente por causa de uma campanha antimutantes liderada pelo senador Robert Kelly (Bruce Davison). Particularmente dois mutantes serão envolvidos nesta luta: o primeiro é Wolverine (Hugh Jackman) que, dotado de incrível força, não lembra do seu passado; e o segundo éVampira (Anna Paquim), uma jovem que absorve toda a força vital de qualquer pessoa que ela toque, sendo que se o contato for um pouco prolongado esta pessoa morrerá. Estes dois mutantes são disputados pela Irmandade dos Mutantes e pelos X-Men, pois cada facção quer fortalecer seu lado. A diferença é que Xavier quer os mutantes para também ajudá-los a compreender e controlar seus poderes, enquanto Magneto precisa dos dois, Vampira em especial, para levar a cabo o plano de atingir os líderes mundiais, que pretendem decidir o futuro dos mutantes na Ilha de Ellis, Nova York.',
        photoCover:
          'https://midias.correiobraziliense.com.br/_midias/jpg/2022/07/22/675x450/1_xmen-26096415.jpeg?20220722171339?20220722171339',
      },
    ];
  }
}
