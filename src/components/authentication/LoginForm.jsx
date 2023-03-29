import React from "react";
import styled from "styled-components";
import Button from "../utils/Button";

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .form-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
      font-weight: 600;
      text-transform: uppercase;
    }
    input {
      height: 40px;
    }
  }
  .submit {
    padding: 8px;
  }
`;
const LoginForm = ({ onClose }) => {
  return (
    <form method='POST'>
      <FormStyle>
        <div className='inside-auth'>
          <div className='form-item'>
            <label htmlFor='email'>Adresse e-mail</label>
            <input type='text' name='email' placeholder='nom@example.com' />
          </div>
          <div className='form-item'>
            <label htmlFor='password'>Mot de passe</label>
            <input
              type='password'
              name='password'
              placeholder='Saisir votre mot de passe'
            />
          </div>
          <Button>Envoyer</Button>
        </div>

        <div className='oustide-outh'>OAuth : Google, Github, Facebook</div>
      </FormStyle>
    </form>
  );
};

export default LoginForm;
