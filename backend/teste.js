const axios = require('axios');

const data = {
  usuario: 'bel070822',
  senha: '080722bel'
};

axios.post('http://localhost:5500/login', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    if (error.response) {
      // O servidor retornou um status diferente de 2xx
      console.error('Erro:', error.response.data);
    } else if (error.request) {
      // A requisição foi feita, mas não recebeu resposta
      console.error('Sem resposta do servidor:', error.request);
    } else {
      // Um erro ocorreu ao configurar a requisição
      console.error('Erro ao configurar a requisição:', error.message);
    }
  });
