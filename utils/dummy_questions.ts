import { QuestionItem } from "./models/question";

export const questions: Array<QuestionItem> = [
  {
    id: 1,
    question:
      "Um jogador executa um lançamento lateral, lançando a bola na direção da sua baliza. Um colega seu, não o guarda-redes, toca a bola com a mão, mas não consegue impedir que esta entre na sua baliza. Como deverá proceder o árbitro?",
    answers: [
      {
        text: "Assinala pontapé de penálti e adverte o defensor.",
        isTrue: false,
      },
      { text: "Assinala pontapé de canto.", isTrue: false },
      { text: "Considera golo válido.", isTrue: true },
      { text: "Assinala pontapé de penálti.", isTrue: false },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 2,
    question:
      "Num ato pontual e isolado, um árbitro assistente foi atingido por um objeto lançado da bancada e ficou impossibilitado de continuar a desempenhar as suas funções. Então o árbitro recrutou entre a assistência uma pessoa da sua confiança e deu continuidade ao jogo. Considera correta a decisão do árbitro?",
    answers: [
      {
        text: "Sim, dado tratar-se de um ato isolado, que não foi praticado por nenhum interveniente no jogo, nem diretor ou funcionário de um dos clubes e desde que a força de segurança assegurasse estarem reunidas as condições para a continuidade do jogo.",
        isTrue: true,
      },
      {
        text: "Não, pois em caso de agressão a elementos da equipa de arbitragem que fiquem impossibilitados de continuar a desempenhar as suas funções, o jogo deve ser dado por terminado. O árbitro deve fazer menção dos factos no relatório do jogo.",
        isTrue: false,
      },
      {
        text: "Não, como o árbitro assistente ficou impossibilitado, o jogo devia ter sido suspenso definitivamente e o clube da casa punido com derrota, independentemente do resultado nesse momento, pois é o responsável pela segurança dos intervenientes no jogo.",
        isTrue: false,
      },
      {
        text: "Não, neste caso o jogo só poderia continuar se o elemento recrutado fosse um árbitro no ativo.",
        isTrue: false,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 3,
    question:
      "Existem diversas situações em que um jogador pode ser advertido por comportamento antidesportivo. Das situações abaixo referidas, diga quando há lugar a advertência.",
    answers: [
      {
        text: "Jogador tenta enganar o árbitro simulando uma lesão ou ser vítima de uma falta.",
        isTrue: false,
      },
      {
        text: "Jogador atua de uma maneira que demonstra falta de respeito pelo jogo.",
        isTrue: false,
      },
      {
        text: "Jogador sai do terreno de jogo para trocar de camisola.",
        isTrue: false,
      },
      { text: "Nas situações A e B.", isTrue: true },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 4,
    question:
      "Como deve ser recomeçado o jogo, quando o árbitro interrompa o jogo por uso de linguagem injuriosa ou gestos ofensivos?",
    answers: [
      {
        text: "Se o árbitro interromper o jogo para penalizar um jogador com expulsão, por uso de linguagem injuriosa, deve recomeçar o jogo com um pontapé-livre indireto.",
        isTrue: true,
      },
      {
        text: "Se o jogo estiver a decorrer dentro da área de penálti, se for defensor assinala pontapé de penálti, se for avançado pontapé-livre indireto. O jogador é sempre expulso.",
        isTrue: false,
      },
      {
        text: "Em todas as situações o árbitro deve expulsar e assinalar pontapé-livre direto ou penálti.",
        isTrue: false,
      },
      { text: "Nenhumas das respostas estão certas.", isTrue: false },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 5,
    question:
      "Dum pontapé de saída, pode obter-se diretamente um golo na baliza adversária. Diga o que deve fazer o árbitro, se o executante introduzir a bola diretamente na sua baliza.",
    answers: [
      {
        text: "Manda repetir o pontapé de saída.",
        isTrue: false,
      },
      {
        text: "Manda executar um pontapé de canto.",
        isTrue: true,
      },
      {
        text: "Manda executar um pontapé de baliza.",
        isTrue: false,
      },
      {
        text: "Manda repetir o pontapé de saída e adverte o executante.",
        isTrue: false,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 6,
    question:
      "Imediatamente a seguir ao recomeço do jogo por obtenção de um golo, o árbitro apercebe-se que a equipa que marcou o golo tem um jogador a mais e esse jogador nesse momento joga a bola. O que deve fazer o árbitro?",
    answers: [
      {
        text: "Interrompe o jogo. Como foi imediatamente a seguir, invalida o golo, adverte o jogador a mais, fá-lo sair do terreno de jogo e pune a sua equipa com pontapé-livre direto.",
        isTrue: false,
      },
      {
        text: "Interrompe o jogo. Invalida o golo, adverte o jogador a mais, manda-o sair do terreno de jogo e faz um lançamento de bola ao solo.",
        isTrue: false,
      },
      {
        text: "Interrompe o jogo. O golo é válido, o jogador a mais é advertido e é mandado sair do terreno de jogo e o jogo recomeço com pontapé-livre direto contra a sua equipa.",
        isTrue: true,
      },
      {
        text: "Interrompe o jogo. O golo é válido, o jogador a mais é advertido e é mandado sair do terreno de jogo e o jogo recomeço com pontapé-livre indireto contra a sua equipa uma vez que apenas jogou a bola.",
        isTrue: false,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 7,
    question:
      "Com o jogo a decorrer, um jogador dentro do terreno de jogo, atira uma bota a um colega de equipa, também dentro do terreno de jogo. Como deve proceder o árbitro?",
    answers: [
      {
        text: "Interromper o jogo, expulsar o jogador agressor e executar um lançamento de bola ao solo, no local onde esta se encontrava no momento da interrupção.",
        isTrue: false,
      },
      {
        text: "Interromper o jogo, expulsar o jogador infrator e assinalar um pontapé-livre indireto, no local onde a bola se encontrava no momento da interrupção.",
        isTrue: false,
      },
      {
        text: "Interromper o jogo, expulsar o jogador infrator e assinalar um pontapé-livre indireto, no local do contacto ou possível contacto.",
        isTrue: false,
      },
      {
        text: "Interromper o jogo, expulsar o agressor e assinalar um pontapé-livre direto ou pontapé de penalti, consoante o local do contacto ou possível contacto.",
        isTrue: true,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 8,
    question:
      "Numa ação normal de uma jogada, dois jogadores adversários saem pela linha lateral ou pela linha de baliza e aí um deles agride o adversário. O que fazer?",
    answers: [
      {
        text: "Executar um lançamento de bola ao solo no local onde se encontrava a bola.",
        isTrue: false,
      },
      {
        text: "Deve assinalar um pontapé-livre direto ou pontapé de penálti contra a equipa do infrator a executar na linha delimitadora do terreno de jogo no local mais próximo da infração.",
        isTrue: true,
      },
      {
        text: "Expulsa o agressor e executa um lançamento de bola ao solo no local onde se encontrava a bola.",
        isTrue: false,
      },
      {
        text: "Expulsa o agressor por conduta violenta e recomeça o jogo com pontapé-livre indireto no local onde a bola se encontrava.",
        isTrue: false,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 9,
    question:
      "Na execução de um pontapé de penálti em tempo normal de jogo, a bola bateu no poste e rebentou. Mesmo assim, bateu nas costas do guarda-redes e acabou por entrar na baliza. Que decisão se deve o árbitro tomar?",
    answers: [
      {
        text: "Efetuar um lançamento de bola ao solo em cima da linha da área de baliza paralela à linha de baliza, no local mais perto onde a bola rebentou.",
        isTrue: false,
      },
      {
        text: "Validar o golo.",
        isTrue: false,
      },
      {
        text: "Efetuar um lançamento de bola ao solo em qualquer ponto da área de penálti.",
        isTrue: true,
      },
      {
        text: "Mandar repetir o pontapé de penálti.",
        isTrue: false,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 10,
    question:
      "Um jogador, em posição de fora de jogo corre rapidamente em direção ao seu meio-campo, e aí joga a bola, infringindo a lei 11. Indique o local onde deve ser executado o pontapé-livre indireto.",
    answers: [
      {
        text: "O pontapé-livre indireto deve ser executado no local onde o jogador se encontrava no momento do passe.",
        isTrue: false,
      },
      {
        text: "O pontapé-livre indireto deve ser executado no local onde o jogador jogou a bola.",
        isTrue: true,
      },
      {
        text: "O pontapé-livre indireto tem de ser executado no meio-campo da equipa defensora.",
        isTrue: false,
      },
      {
        text: "O pontapé-livre indireto deve ser executado em cima da linha de meio-campo.",
        isTrue: false,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 11,
    question:
      "Durante a execução dos pontapés da marca de penálti, um dos executantes é expulso. Qual deve ser a decisão do árbitro?",
    answers: [
      {
        text: "Termina a execução dos pontapés de penálti.",
        isTrue: false,
      },
      {
        text: "Permite a substituição do jogador expulso por um suplente, uma vez que a equipa ainda possui uma substituição.",
        isTrue: false,
      },
      {
        text: "Prossegue com a marcação com os restantes pontapés, uma vez que o número de jogadores apenas tem de ser igual antes da marcação dos penáltis.",
        isTrue: false,
      },
      {
        text: "A equipa que ficou com um jogador a mais deve retirar um jogador para que ambas as equipas fiquem com igual número de jogadores.",
        isTrue: true,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 12,
    question:
      "Um guarda-redes que esteja impossibilitado de continuar antes ou durante os pontapés de penálti e cuja equipa não tenha usado o número máximo de substituições autorizadas, pode ser substituído?",
    answers: [
      {
        text: "Sim. Por um suplente inscrito ou por um jogador excluído para ficar com o mesmo número de jogadores que a equipa adversária, sendo que o guarda-redes não pode continuar a participar e não pode executar um pontapé de penálti.",
        isTrue: true,
      },
      {
        text: "Não. A menos que seja por um substituído inscrito ou por um jogador expulso para ficar com o mesmo número de jogadores que a equipa adversária, sendo que o guarda-redes não pode continuar a participar e não pode executar um pontapé de penálti.",
        isTrue: false,
      },
      {
        text: "Pode em todas as circunstâncias.",
        isTrue: false,
      },
      {
        text: "As respostas anteriores estão todas erradas.",
        isTrue: false,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 13,
    question:
      "Pontapé de penálti que foi executado para trás, pelo que levou o árbitro a tomar a seguinte decisão:",
    answers: [
      {
        text: "Se golo repete. Não foi golo assinala pontapé-livre indireto.",
        isTrue: false,
      },
      {
        text: "Assinala em qualquer das circunstâncias pontapé-livre indireto.",
        isTrue: true,
      },
      {
        text: "Se golo repete. Não foi golo recomeça em conformidade.",
        isTrue: false,
      },
      {
        text: "Se golo interrompe e assinala bola ao solo.",
        isTrue: false,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 14,
    question:
      "Um suplente entra em terreno de jogo e pontapeia a bola para canto, quando esta ia a entrar na sua baliza. Qual deve ser a decisão do árbitro?",
    answers: [
      {
        text: "Pontapé-livre direto e cartão amarelo.",
        isTrue: false,
      },
      {
        text: "Pontapé-livre indireto e cartão amarelo.",
        isTrue: false,
      },
      {
        text: "Pontapé de penálti e cartão amarelo.",
        isTrue: false,
      },
      {
        text: "Pontapé de penálti e cartão vermelho.",
        isTrue: true,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 15,
    question:
      "O guarda-redes executou um pontapé de baliza, a bola entrou em jogo, mas pela força do vento voltou em direção da sua baliza. O guarda-redes voltou a tocá-la com as mãos, mas esta seguiu para um avançado que ficou de posse da bola e se preparava para marcar golo, quando o guarda-redes agarrou o avançado impedindo o golo. O árbitro interrompeu o jogo. O que deve decidir?",
    answers: [
      {
        text: "Mandar repetir o pontapé de baliza.",
        isTrue: false,
      },
      {
        text: "Recomeça o jogo com um pontapé-livre indireto no local onde o guarda-redes agarrou o avançado.",
        isTrue: false,
      },
      {
        text: "Assinalar um pontapé-livre indireto no local onde o guarda-redes jogou a bola pela segunda vez.",
        isTrue: false,
      },
      {
        text: "Expulsar o guarda-redes por anular clara oportunidade de golo do adversário e assinalar pontapé de penálti.",
        isTrue: true,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 16,
    question:
      "Com o jogo a decorrer, dois jogadores, um de cada equipa, devido à ação da jogada, saem do terreno de jogo, pela linha de baliza. O jogador defensor agride o jogador atacante. Qual deve ser a decisão do árbitro?",
    answers: [
      {
        text: "Interrompe o jogo, expulsa o jogador agressor por conduta violenta e recomeça o jogo com pontapé-livre direto ou pontapé de penálti.",
        isTrue: true,
      },
      {
        text: "Interrompe o jogo, expulsa o jogador agressor por conduta violenta e recomeça o jogo com lançamento de bola ao solo no local onde a bola se encontrava no momento da interrupção.",
        isTrue: false,
      },
      {
        text: "Interrompe o jogo, adverte o jogador agressor e recomeça o jogo com pontapé-livre indireto onde a bola se encontrava no momento da interrupção.",
        isTrue: false,
      },
      {
        text: "Interrompe o jogo, expulsa o jogador agressor por força excessiva e recomeça o jogo com pontapé-livre direto em cima da linha de baliza no local mais próximo por onde saíram os jogadores.",
        isTrue: false,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 17,
    question:
      "Um jogador atacante, para impedir o guarda-redes de repor a bola em jogo após uma defesa, agarra-o por um braço no momento em que pontapeia a bola. Como deverá agir?",
    answers: [
      {
        text: "Deverá interromper o jogo e punir a equipa do infrator com um pontapé-livre indireto.",
        isTrue: false,
      },
      {
        text: "Deverá interromper o jogo e punir a equipa do infrator com um pontapé-livre direto e advertir o jogador atacante.",
        isTrue: false,
      },
      {
        text: "Deverá interromper o jogo e punir a equipa do infrator com um pontapé-livre direto.",
        isTrue: true,
      },
      {
        text: "Deverá interromper o jogo advertir o infrator e punir a sua equipa com um pontapé-livre indireto.",
        isTrue: false,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 18,
    question:
      "No final do 1° tempo, o jogo foi prolongado para um pontapé de penálti. O jogador executante, no final da sua corrida, simula pontapear para um lado da baliza e depois chuta para o outro introduzindo a bola na baliza. O que deve fazer o árbitro?",
    answers: [
      {
        text: "O jogador deve ser advertido, o golo não é validado, e o final do 1° tempo deve ser dado por terminado.",
        isTrue: true,
      },
      {
        text: "Fazer fintas durante a corrida de balanço para execução de um pontapé de penálti para confundir o adversário são autorizadas e faz parte do futebol. O árbitro deve validar o golo.",
        isTrue: false,
      },
      {
        text: "O pontapé de penálti deve ser repetido, não havendo motivo para qualquer sanção disciplinar.",
        isTrue: false,
      },
      {
        text: "Simular pontapear a bola depois de terminar a sua corrida de balanço é considerado uma infração à lei 14 e um ato de comportamento antidesportivo, pelo que o jogador deve ser advertido. Assim, o golo não será validado, repetindo-se o pontapé de penálti.",
        isTrue: false,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 19,
    question:
      "Com o jogo a decorrer, um jogador retirou os números da sua camisola. O árbitro interrompeu o jogo, pois não havia lugar à aplicação da vantagem, advertiu o jogador e solicitou que ele regularizasse a situação. Como deve ser recomeçado o jogo?",
    answers: [
      {
        text: "Deve recomeçar com um lançamento de bola ao solo no local onde se encontrava a bola quando o árbitro interrompeu o jogo.",
        isTrue: false,
      },
      {
        text: "Trata-se de uma infração à lei 4, devendo o jogo recomeçar com um pontapé-livre indireto no local onde a bola se encontrava no momento da interrupção.",
        isTrue: false,
      },
      {
        text: "Deve recomeçar com um lançamento de bola ao solo no local onde o jogador se encontrava quando o árbitro interrompeu o jogo.",
        isTrue: false,
      },
      {
        text: "Como o jogador incorreu em comportamento antidesportivo, o jogo deve ser recomeçado com um pontapé-livre indireto no local onde o jogador se encontrava.",
        isTrue: true,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
  {
    id: 20,
    question:
      "Com o jogo a decorrer um jogador defensor dentro da sua área de baliza, cuspiu sobre o seu adversário que tinha saído pela linha de baliza pela ação do jogo?",
    answers: [
      {
        text: "Interrompe o jogo, expulsa o defensor e recomeça o jogo com um pontapé de penálti.",
        isTrue: true,
      },
      {
        text: "Interrompe o jogo, expulsa o defensor e recomeça o jogo com um pontapé-livre indireto no local onde se encontrava a bola no momento da interrupção.",
        isTrue: false,
      },
      {
        text: "Interrompe o jogo, adverte o defensor uma vez que o avançado se encontrava fora do terreno de jogo, e recomeça com um pontapé-livre indireto no local onde se encontrava a bola no momento da interrupção.",
        isTrue: false,
      },
      {
        text: "Deixa continuar o jogo e na próxima interrupção, adverte o infrator.",
        isTrue: false,
      },
    ],
    isLocked: false,
    questionType: "random",
    law: 12,
  },
];
