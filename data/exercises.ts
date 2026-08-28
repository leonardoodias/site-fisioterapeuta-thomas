export type RegionId = 'neck' | 'shoulders' | 'spine' | 'legs' | 'wrists';

export type RegionConfig = {
  id: RegionId;
  name: string;
  exerciseCount: number;
  color: string;
  accentColor: string;
  icon: string;
};

export type Exercise = {
  id: string;
  slug: string;
  category: RegionId;
  order: number;
  title: string;
  description: string;
  duration: string;
  bilateral: boolean;
  image: string;
  alt: string;
};

export const regions: RegionConfig[] = [
  { id: 'neck', name: 'Pescoço', exerciseCount: 3, color: '#078BC7', accentColor: '#078BC7', icon: '◉' },
  { id: 'shoulders', name: 'Ombros e braços', exerciseCount: 5, color: '#19A65A', accentColor: '#19A65A', icon: '↗' },
  { id: 'spine', name: 'Coluna e tronco', exerciseCount: 5, color: '#16823F', accentColor: '#16823F', icon: '⌁' },
  { id: 'legs', name: 'Pernas', exerciseCount: 5, color: '#F06424', accentColor: '#F06424', icon: '⌇' },
  { id: 'wrists', name: 'Punhos e mãos', exerciseCount: 4, color: '#7650B8', accentColor: '#7650B8', icon: '↻' },
];

export const exercises: Exercise[] = [
  { id: 'neck-01', slug: 'inclinacao-lateral', category: 'neck', order: 1, title: 'Inclinação lateral', description: 'Incline a cabeça para um lado, aproximando a orelha do ombro. Depois, troque o lado.', duration: '15–30 segundos', bilateral: true, image: '/exercises/neck-lateral.webp', alt: 'Pessoa inclinando a cabeça lateralmente com uma mão apoiada suavemente sobre a cabeça' },
  { id: 'neck-02', slug: 'alongamento-frente', category: 'neck', order: 2, title: 'Alongamento para frente', description: 'Abaixe o queixo em direção ao peito, alongando a parte de trás do pescoço.', duration: '15–30 segundos', bilateral: false, image: '/exercises/neck-forward.webp', alt: 'Pessoa abaixando o queixo em direção ao peito' },
  { id: 'neck-03', slug: 'rotacao', category: 'neck', order: 3, title: 'Rotação', description: 'Vire a cabeça lentamente para um lado e depois para o outro.', duration: '15–30 segundos', bilateral: true, image: '/exercises/neck-rotation.webp', alt: 'Pessoa girando lentamente a cabeça para os dois lados' },

  { id: 'shoulders-01', slug: 'braco-cruzado', category: 'shoulders', order: 1, title: 'Braço cruzado', description: 'Passe um braço na frente do corpo e puxe suavemente com o outro.', duration: '15–30 segundos', bilateral: true, image: '/exercises/shoulders-cross-arm.webp', alt: 'Pessoa alongando um braço cruzado à frente do corpo' },
  { id: 'shoulders-02', slug: 'triceps', category: 'shoulders', order: 2, title: 'Tríceps', description: 'Leve uma mão atrás da cabeça e empurre o cotovelo suavemente para baixo.', duration: '15–30 segundos', bilateral: true, image: '/exercises/shoulders-triceps.webp', alt: 'Pessoa alongando o tríceps com a mão atrás da cabeça' },
  { id: 'shoulders-03', slug: 'peitoral', category: 'shoulders', order: 3, title: 'Peitoral', description: 'Coloque as mãos atrás das costas e estenda os braços suavemente.', duration: '15–30 segundos', bilateral: false, image: '/exercises/shoulders-chest.webp', alt: 'Pessoa alongando o peitoral com as mãos atrás das costas' },
  { id: 'shoulders-04', slug: 'ombro-posterior', category: 'shoulders', order: 4, title: 'Ombro posterior', description: 'Cruze um braço na frente do peito e puxe com o outro.', duration: '15–30 segundos', bilateral: true, image: '/exercises/shoulders-posterior.webp', alt: 'Pessoa alongando a parte posterior do ombro' },
  { id: 'shoulders-05', slug: 'mobilidade-ombros', category: 'shoulders', order: 5, title: 'Mobilidade dos ombros', description: 'Faça movimentos circulares com os ombros para frente e para trás.', duration: '15–30 segundos', bilateral: false, image: '/exercises/shoulders-mobility.webp', alt: 'Pessoa realizando movimentos circulares com os ombros' },

  { id: 'spine-01', slug: 'rotacao-tronco', category: 'spine', order: 1, title: 'Rotação do tronco', description: 'Sentado, vire o tronco lentamente para um lado e depois para o outro.', duration: '15–30 segundos', bilateral: true, image: '/exercises/spine-rotation.webp', alt: 'Pessoa sentada girando lentamente o tronco' },
  { id: 'spine-02', slug: 'flexao-tronco', category: 'spine', order: 2, title: 'Flexão do tronco', description: 'Incline o tronco para frente, deixando os braços relaxados.', duration: '15–30 segundos', bilateral: false, image: '/exercises/spine-flexion.webp', alt: 'Pessoa sentada inclinando o tronco para frente' },
  { id: 'spine-03', slug: 'alongamento-lateral', category: 'spine', order: 3, title: 'Alongamento lateral', description: 'Levante um braço e incline o tronco para o lado contrário.', duration: '15–30 segundos', bilateral: true, image: '/exercises/spine-lateral.webp', alt: 'Pessoa inclinando lateralmente o tronco com um braço elevado' },
  { id: 'spine-04', slug: 'extensao-tronco', category: 'spine', order: 4, title: 'Extensão do tronco', description: 'Coloque as mãos na cintura e incline suavemente o tronco para trás.', duration: '15–30 segundos', bilateral: false, image: '/exercises/spine-extension.webp', alt: 'Pessoa realizando uma extensão suave do tronco' },
  { id: 'spine-05', slug: 'alongamento-lombar', category: 'spine', order: 5, title: 'Alongamento lombar', description: 'Sentado, abrace os joelhos e incline o corpo para frente.', duration: '15–30 segundos', bilateral: false, image: '/exercises/spine-lumbar.webp', alt: 'Pessoa sentada abraçando os joelhos e inclinando o corpo para frente' },

  { id: 'legs-01', slug: 'quadriceps', category: 'legs', order: 1, title: 'Quadríceps', description: 'Segure o pé atrás do corpo e aproxime o calcanhar dos glúteos.', duration: '15–30 segundos', bilateral: true, image: '/exercises/legs-quadriceps.webp', alt: 'Pessoa em pé alongando o quadríceps' },
  { id: 'legs-02', slug: 'posterior-coxa', category: 'legs', order: 2, title: 'Posterior da coxa', description: 'Apoie o calcanhar e incline o tronco para frente.', duration: '15–30 segundos', bilateral: true, image: '/exercises/legs-hamstring.webp', alt: 'Pessoa alongando a parte posterior da coxa com o calcanhar apoiado' },
  { id: 'legs-03', slug: 'panturrilha', category: 'legs', order: 3, title: 'Panturrilha', description: 'Coloque uma perna atrás e pressione o calcanhar contra o chão.', duration: '15–30 segundos', bilateral: true, image: '/exercises/legs-calf.webp', alt: 'Pessoa alongando a panturrilha com uma perna atrás' },
  { id: 'legs-04', slug: 'gluteos', category: 'legs', order: 4, title: 'Glúteos', description: 'Sentado, cruze uma perna sobre a outra e incline o corpo suavemente para frente.', duration: '15–30 segundos', bilateral: true, image: '/exercises/legs-glutes.webp', alt: 'Pessoa sentada alongando os glúteos com uma perna cruzada' },
  { id: 'legs-05', slug: 'parte-interna-coxa', category: 'legs', order: 5, title: 'Parte interna da coxa', description: 'Una as plantas dos pés e aproxime os joelhos suavemente do chão.', duration: '15–30 segundos', bilateral: false, image: '/exercises/legs-inner-thigh.webp', alt: 'Pessoa sentada alongando a parte interna das coxas' },

  { id: 'wrists-01', slug: 'flexao-punho', category: 'wrists', order: 1, title: 'Flexão do punho', description: 'Estenda o braço e puxe os dedos suavemente para trás.', duration: '15–30 segundos', bilateral: true, image: '/exercises/wrists-flexion.webp', alt: 'Pessoa realizando a flexão do punho com o braço estendido' },
  { id: 'wrists-02', slug: 'extensao-punho', category: 'wrists', order: 2, title: 'Extensão do punho', description: 'Estenda o braço e puxe os dedos suavemente para baixo.', duration: '15–30 segundos', bilateral: true, image: '/exercises/wrists-extension.webp', alt: 'Pessoa realizando a extensão do punho com o braço estendido' },
  { id: 'wrists-03', slug: 'mobilidade-maos', category: 'wrists', order: 3, title: 'Mobilidade das mãos', description: 'Abra e feche as mãos lentamente.', duration: '15–30 segundos', bilateral: false, image: '/exercises/wrists-hands-mobility.webp', alt: 'Pessoa abrindo e fechando as mãos lentamente' },
  { id: 'wrists-04', slug: 'rotacao-punhos', category: 'wrists', order: 4, title: 'Rotação dos punhos', description: 'Faça círculos com os punhos para um lado e depois para o outro.', duration: '15–30 segundos', bilateral: false, image: '/exercises/wrists-rotation.webp', alt: 'Pessoa realizando movimentos circulares com os punhos' },
];

export const getExercisesByRegion = (regionId: RegionId) =>
  exercises.filter((exercise) => exercise.category === regionId).sort((a, b) => a.order - b.order);
