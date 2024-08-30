import { ArrowLeft, LogIn, UserCheck, UserPlus } from "react-feather";
import { CadastroButton, SubmitButton } from "./styles";
 
interface ButtonProps {
    text: string;
    variant?: 'primary' | 'secondary' | 'cadastrar' | 'voltar';
    onClick: (event: React.FormEvent) => void;
    disabled?: boolean;
  }
  
  export const Button: React.FC<ButtonProps> = ({ text, variant = 'primary', onClick, disabled  }) => {
    if (variant === 'secondary') {
      return <CadastroButton onClick={onClick} disabled={disabled}><UserPlus />{text}</CadastroButton>;
    }

    if (variant === 'cadastrar') {
      return <SubmitButton onClick={onClick} disabled={disabled}><UserCheck />{text}</SubmitButton>;
    }

    if (variant === 'voltar') {
      return <CadastroButton onClick={onClick} disabled={disabled}><ArrowLeft />{text}</CadastroButton>;
    }
  
    return <SubmitButton onClick={onClick} disabled={disabled}><LogIn />{text}</SubmitButton>;
  };
    
    
  