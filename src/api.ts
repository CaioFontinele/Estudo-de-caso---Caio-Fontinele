import axios from 'axios';

const dummyApi = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});


const jsonServerApi = axios.create({
  baseURL: 'http://localhost:3001/', 
  headers: {
    'Content-Type': 'application/json',
  },
});


export const syncUsersFromDummyToJsonServer = async () => {
  try {
    // Buscar dados de usuários da Dummy JSON API
    const response = await dummyApi.get('/users');
    const users = response.data.users;
    
    // Enviar dados para o JSON Server, um por um
    for (const user of users) {
      await jsonServerApi.post('/users', user);
    }

    console.log('Dados sincronizados com sucesso!');
  } catch (error) {
    console.error('Erro ao sincronizar dados:', error);
  }
};

// Função para adicionar um novo usuário no JSON Server
export const addUser = async (username: string, password: string, email: string) => {
  try {
    const response = await jsonServerApi.post('/users', {
      username,
      password,
      email,
    });

    return response.data;
  } catch (error) {
    throw new Error('Erro ao adicionar usuário');
  }
};


export const loginUser = async (username: string, password: string) => {
  try {
    const response = await jsonServerApi.get('/users');
    
    const users = response.data;
    const user = users.find((user: any) => user.username === username && user.password === password);
    

    if (user) {
      console.log("Login bem sucedido", response)
      return user;
    }if (!user) {
      console.log("O login falhou", response)
    }
  } catch (error) {
    throw new Error('Login failed');
  }
};

  




  