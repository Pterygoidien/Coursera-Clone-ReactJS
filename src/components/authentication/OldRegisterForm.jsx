import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import FormGenerator from "../utils/FormGenerator";
import axios from "axios";
import { useDispatch } from "react-redux";
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

const formFields = [
  {
    name: "name",
    label: "Nom complet",
    required: true,
    error: "Vous devez saisir un nom complet",
    params: {
      minLength: 3,
      maxLength: 40,
    },
    placeholder: "Saisissez votre nom et prénom",
  },
  {
    name: "email",
    label: "Adresse e-mail",
    type: "email",
    required: true,
    error:
      "Adresse e-mail non valide. Veuillez saisir une adresse au format name@email.com",
    params: {
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      },
    },
    placeholder: "nom@email.com",
  },
  {
    name: "password",
    label: "Mot de passe",
    type: "password",
    required: "true",
    error: "Le mot de passe doit compter entre 8 et 72 caractères.",
    params: {
      minLength: 8,
      maxLength: 72,
    },
    placeholder: "Créez un mot de passe",
    legend: "Entre 8 et 72 caractères",
  },
];

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  );

  const onSubmit = formData => {
    console.log(formData);
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
      <FormGenerator formFields={formFields} className='inside-auth' />
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
