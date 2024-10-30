import styled from "styled-components";

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    width: 21em;
    
`;


export const FormLabel = styled.label`
    margin-bottom: .6em;
    font-size: 22px;
    text-align: left;
    
`; 
 
export const FormInput = styled.input`
    padding: .6em;
    font-size: 18px;
    border-radius: 0;
    border: 0.5px solid #f0f0f0;

   
`;

export const ErrorMessage = styled.div`
    color: red;
    
`;
