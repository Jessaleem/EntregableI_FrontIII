import { useState } from "react";
import FormStyles from "../Styles/Form.module.css"
import CardMessage from "./CardMessage";

export const Form = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: "",
    address: "",
    email: "",
    LiteraryGender: ""
  })

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const resetForm = () => {
    setUser({
      firstName: "",
      lastName: "",
      age: "",
      address: "",
      email: "",
      LiteraryGender: ""
    })
  }

  const handleSubmit = (e) => {
    console.log('submit')
    e.preventDefault();
    const regexThreeChars = /^[^\s].{2,}$/;
    const regexSixChars = /^.{6,}$/;
    
    if (!regexThreeChars.test(user.lastName) ||!regexSixChars.test(user.email)){
      setError(true);
      setSuccess(false)
      setShowForm(false)
    } else {
      setError(false);
      setSuccess(true);
      setShowForm(false)
      resetForm();
    }
  } 

  const handleGoBack = () => {
    setShowForm(true);
    setError(false);
    setSuccess(false);
  };

  return (
    <>
    {showForm && 
    <form onSubmit={handleSubmit} className={FormStyles.formContainer}>
      <label>Nombre:</label>
      <input type="text" name="firstName" value={user.firstName} onChange={handleChange} required/>
      <label className={FormStyles.labelMargin}>Apellido:</label>
      <input type="text" name="lastName" value={user.lastName} onChange={handleChange} required/>
      <label className={FormStyles.labelMargin}>Edad:</label>
      <input type="text" name="age" value={user.age} onChange={handleChange} required/>
      <label className={FormStyles.labelMargin}>Address:</label>
      <input type="text" name="address" value={user.address} onChange={handleChange} required/>
      <label className={FormStyles.labelMargin}>Email:</label>
      <input type="text" name="email" value={user.email} onChange={handleChange} required/>
      <label className={FormStyles.labelMargin}>Genero Literario Favorito:</label>
      <input type="text" name="LiteraryGender" value={user.LiteraryGender} onChange={handleChange} required/>
      <button type="submit" className={FormStyles.labelMargin}>Register</button>
    </form>
    }

    {(error || success) && (
      <CardMessage error={error} success={success} onGoBack={handleGoBack}/>
    )}
    </>
  )
}

export default Form
