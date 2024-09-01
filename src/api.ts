import axios from 'axios';
import { toast } from 'react-toastify';


//aqui fazemos a requisição para a url da API e atribui a variável 
const dummyApi = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

//aqui fazemos a requisição para o json-server e atribui a variável
const jsonServerApi = axios.create({
  baseURL: 'http://localhost:3001/', 
  headers: {
    'Content-Type': 'application/json',
  },
});


//aqui ele faz a sincronização dos dados de users da API para o json-server(db.json)
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

//função para adicionar um usuário ao json-server(db.json)
export const addUser = async (username: string, password: string, email: string) => {
  try {
    const response = await jsonServerApi.post('/users', {
      username,
      password,
      email,
    });

    //aqui ele me exibe um Toast de sucesso
    toast.success("Usuário cadastrado com sucesso!", {
      position: "top-right",
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    return response.data;
  } catch (error) {
    //console.error('Erro ao adicionar usuário', error);

    //aqui ele me exibe um Toast de erro
    toast.error("Erro ao adicionar usuário!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    throw new Error('Erro ao adicionar usuário');
  }
};

// função responsável por fazer a validação e login de usuário diretamente do json-server usando a instancia criada no axios 
export const loginUser = async (username: string, password: string) => {
  try {
    const response = await jsonServerApi.get('/users');
    const users = response.data; //el me armazena os dados de users do json-server
    
    //aqui ele faz a validação se o usuário já existe no db.json
    const user = users.find((user: any) => user.username === username && user.password === password);

    
    //se a condição for satisfeita vai retornar os toasts com os avisos
    if (user) {
      //console.log("Login bem sucedido", response);
      toast.success("Login bem sucedido!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return user;
    } else {
      //console.log("O login falhou", response);
      toast.error("Usuário ou senha incorretos!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  } catch (error) {
    //console.error('Login failed', error);
    toast.error("Erro ao tentar fazer login!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    throw new Error('Login failed');
  }
};
  




  