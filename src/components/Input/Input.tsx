import React from 'react';
import { ContainerForm, FormInput, FormLabel } from "./styles";

interface InputProps {
  type: string;
  text: string;
  name: string;
  placeholder: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
}

export const Input: React.FC<InputProps> = ({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
}) => {
  
  return (
    <ContainerForm>
      <FormLabel htmlFor={name}>{text}</FormLabel>
      <FormInput
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => {
          handleOnChange(e);
        }}
        value={value}
      />

    </ContainerForm>
  );
};
