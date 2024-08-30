import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { addUser, loginUser, syncUsersFromDummyToJsonServer } from '../../api';
import Image from "../../assets/images/back_login.png";
import logoUnimed from "../../assets/images/logo_unimed.png";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import {
  ContainerLogin,
  LeftColumn,
  LoginContainer,
  LoginTitle,
  Logo,
  RightColumn,
  StyledImage
} from "./styles";

export const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [usernameCad, setUsernameCad] = useState('');
  const [passwordCad, setPasswordCad] = useState('');
  const [emailCad, setEmailCad] = useState('');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const initializeData = async () => {
      await syncUsersFromDummyToJsonServer();
    };

    initializeData();
  }, []);

  
  const validateField = (name: string, value: string) => {
    let errorMessage = '';

    if (name === 'nome_cadastro') {
      if (!value) {
        errorMessage = 'Nome é obrigatório.';
      } else if (value.length < 4) {
        errorMessage = 'Nome deve ter pelo menos 4 caracteres.';
      }
    } else if (name === 'email_cadastro') {
      if (!value) {
        errorMessage = 'Email é obrigatório.';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errorMessage = 'Email inválido.';
      }
    } else if (name === 'senha_cadastro') {
      if (!value) {
        errorMessage = 'Senha é obrigatória.';
      } else if (value.length < 4) {
        errorMessage = 'Senha deve ter pelo menos 4 caracteres.';
      }
    } else if (name === 'confirmaSenha_cadastro') {
      if (value !== passwordCad) {
        errorMessage = 'Senhas não coincidem.';
      }
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage
    }));
  };

  
  const isFormValid = () => {
    return !Object.values(formErrors).some((error) => error !== '') &&
      usernameCad &&
      passwordCad &&
      emailCad &&
      passwordCad === confirmPass;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const data = await loginUser(username, password);
      localStorage.setItem('authToken', data.token);
      console.log(localStorage)
      navigate('/dashboard'); 
    } catch (error) {
      setError('Falha no login. Verifique suas credenciais.');
    }
  };

  

  
  const handleAddUser = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    try {
      const dataUser = await addUser(usernameCad, passwordCad, emailCad);
      console.log('Usuário adicionado com sucesso', dataUser);
      
    } catch (error) {
      setError('Falha ao cadastrar o usuário. Verifique seus dados.');
    }
  };

  
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  
  const handleCadUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameCad(e.target.value);
    validateField('nome_cadastro', e.target.value);
  };

  const handleCadEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailCad(e.target.value);
    validateField('email_cadastro', e.target.value);
  };

  const handleCadPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordCad(e.target.value);
    validateField('senha_cadastro', e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPass(e.target.value);
    validateField('confirmaSenha_cadastro', e.target.value);
  };

  const alterForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <ContainerLogin>
          <LeftColumn>
            <StyledImage src={Image} />
          </LeftColumn>

          <RightColumn>
            <LoginContainer>
              <LoginTitle>Login</LoginTitle>
              <Input 
                type="text"
                text="Usuário"
                placeholder="informe seu nome de usuário"
                handleOnChange={handleUserNameChange}
                value={username}
                name="nome_usuario"
              />
              

              <Input 
                type="password"
                text="Senha"
                placeholder="informe sua senha"
                handleOnChange={handlePasswordChange}
                value={password}
                name="senha_login"              
              />

              <Button text="Entrar" variant="primary" onClick={handleSubmit} />
              <Button text="Não tenho conta" variant="secondary" onClick={alterForm} />
              <Logo src={logoUnimed} />
            </LoginContainer>
          </RightColumn>
        </ContainerLogin>
      ) : (
        <ContainerLogin>
          <LeftColumn>
            <StyledImage src={Image} />
          </LeftColumn>

          <RightColumn>
            <LoginContainer>
              <LoginTitle>Faça seu cadastro</LoginTitle>
              <Input 
                type="text"
                text="Nome"
                placeholder="informe seu nome"
                handleOnChange={handleCadUserNameChange}
                value={usernameCad}
                name="nome_cadastro"
              />
              {formErrors['nome_cadastro'] && <div style={{ color: 'red' }}>{formErrors['nome_cadastro']}</div>}
              
              <Input 
                type="text"
                text="Email"
                placeholder="informe seu melhor e-mail"
                handleOnChange={handleCadEmailChange}
                value={emailCad}
                name="email_cadastro"
              />
              {formErrors['email_cadastro'] && <div style={{ color: 'red' }}>{formErrors['email_cadastro']}</div>}
              
              <Input 
                type="password"
                text="Senha"
                placeholder="informe uma senha"
                handleOnChange={handleCadPasswordChange}
                value={passwordCad}
                name="senha_cadastro"
              />
              {formErrors['senha_cadastro'] && <div style={{ color: 'red' }}>{formErrors['senha_cadastro']}</div>}
              
              <Input 
                type="password"
                text="Confirme sua senha"
                placeholder="Confirme sua senha"
                handleOnChange={handleConfirmPasswordChange}
                value={confirmPass}
                name="confirmaSenha_cadastro"
              />
              {formErrors['confirmaSenha_cadastro'] && <div style={{ color: 'red' }}>{formErrors['confirmaSenha_cadastro']}</div>}
              
              <Button 
                text="Cadastrar"
                variant="cadastrar"
                onClick={handleAddUser}
                disabled={!isFormValid()} 
              />
              <Button text="Voltar" variant="voltar" onClick={alterForm} />
              <Logo src={logoUnimed} />
            </LoginContainer>
          </RightColumn>
        </ContainerLogin>
      )}
    </div>
  );
};

