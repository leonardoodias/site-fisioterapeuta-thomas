const phone = '(16) 3954-2923';

export const professional = {
  name: 'Dr. Thomas A. Bressan',
  profession: 'Fisioterapeuta',
  registration: 'CREFITO-3/102127-F',
  phone,
  phoneHref: `tel:+55${phone.replace(/\D/g, '')}`,
  clinic: 'Clínica Maffei',
  address: ['Rua João Bueno dos Reis, 300', 'Jardim Gurilândia', 'Santa Rosa de Viterbo – SP'],
} as const;
