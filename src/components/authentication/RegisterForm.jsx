import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signup } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 400px;
  & > div,
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    align-items: center;
  }
  button {
    width: 100%;
  }
  .form-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
      font-weight: 600;
      text-transform: uppercase;
    }
    input {
      min-width: 320px;
      width: 100%;
      height: 40px;
    }
  }
  .submit {
    padding: 8px;
  }
  .modal-desc {
    max-width: 200px;
    text-align: center;
    margin: 0 auto;
    display: block;
  }
  h2 {
    margin-top: 7px;
    margin-bottom: 1rem;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }
  .oauth {
    border: 1px solid black;
    padding: 1em;
    font-weight: 600;
  }
  .error-message {
    display: flex;
    background-color: rgb(251, 230, 230);
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 1rem;
    gap: 1em;
    & > i {
      color: red;
    }
  }
`;

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [validForm, setValidForm] = useState(false);
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = formData => {
    if (!Object.keys(errors).length) dispatch(signup(formData));
  };

  return (
    <FormStyle>
      <div className='modal-desc'>
        <h2>S'inscrire</h2>
        <p>
          Profitez de votre temps libre pour apprendre après des meilleurs
          universités et entreprises
        </p>
      </div>
      {Object.keys(errors).length > 0 && (
        <div className='error-message'>
          <i className='fa-solid fa-circle-exclamation'></i>
          <div className='error-message__content'></div>
          <ul>
            {errors["name"] && <li>Vous devez saisir un nom complet</li>}
            {errors["email"] && (
              <li>
                Adresse e-mail non valide. Veuillez saisir une adresse au format
                name@email.com
              </li>
            )}
            {errors["password"] && (
              <li>Le mot de passe doit compter entre 8 et 72 caractères.</li>
            )}
          </ul>
        </div>
      )}
      <form
        method='post'
        className='inside-auth'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='form-item'>
          <label htmlFor='name'>Nom complet</label>
          <input
            type='text'
            placeholder='Saisissez votre nom et prénom'
            {...register("name", {
              required: true,
              minLength: 3,
              maxLenght: 70,
            })}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='email'>Adresse e-mail</label>
          <input
            type='email'
            placeholder='Saisissez votre nom et prénom'
            {...register("email", {
              required: true,
              minLength: 3,
              maxLenght: 70,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              },
            })}
          />
        </div>
        <div className='form-item'>
          <label htmlFor='email'>Mot de passe</label>
          <input
            type='password'
            placeholder='Créer un mot de passe'
            {...register("password", {
              required: true,
              minLength: 8,
              maxLenght: 70,
            })}
          />
        </div>
        <button className='btn btn--primary submit'>
          Inscrivez-vous gratuitement
        </button>
      </form>

      <div className='oustide-oauth'>
        <p>Ou</p>
        <button className='btn btn--outline-primary oauth'>
          Continuer avec Google
        </button>
        <button className='btn btn--outline-primary oauth'>
          Continuer avec Facebook
        </button>
        <p>
          Vous utilisez déjà Coursera ?{" "}
          <Link to='./?authMode=login' style={{ color: "blue" }}>
            Connexion
          </Link>
        </p>
      </div>
    </FormStyle>
  );
};

export default RegisterForm;
