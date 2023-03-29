import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormGenerator = ({ formFields, className = null }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Input = ({
    label,
    name,
    type = "text",
    required = false,
    placeholder = "",
    params = {},
    legend,
  }) => (
    <div className='form-item'>
      {label && <label htmlFor={label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, { required, ...params })}
      />
      <p>{legend && legend}</p>
    </div>
  );

  return (
    <form
      method='post'
      className={className}
      onSubmit={handleSubmit(e => e.preventDefault())}
    >
      {Object.keys(errors).length > 0 && (
        <div className='error-message'>
          <i className='fa-solid fa-circle-exclamation'></i>
          <div className='error-message__content'>
            {formFields.map(
              field =>
                errors[field.name] && <p key={field.name}>{field.error}</p>
            )}
          </div>
        </div>
      )}

      {formFields.map(field => (
        <Input
          label={field.label}
          name={field.name}
          type={field.type}
          params={field.params}
          required={field.required}
          placeholder={field.placeholder}
          legend={field.legend}
          key={field.name}
        />
      ))}
      <button className='btn btn--primary submit'>
        Inscrivez-vous gratuitement
      </button>
    </form>
  );
};

export default FormGenerator;
