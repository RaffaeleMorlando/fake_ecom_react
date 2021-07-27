import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAccount, loginAccount } from '../../../actions/auth.js';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { useFormik } from 'formik';
import './FormAuth.scss';



const FormAuth = () => {

  const onSubmit = () => {
    console.log('submitted');
  }

  const formik = useFormik(
    {
      initialValues: {
        name: '',
        email: '',
        password: '',
      },
      validateOnBlur: true,
      onSubmit
  });


  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isRegisterd, setIsRegisterd] = useState(false);
  const [verify, setVerify] = useState(false);


  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isRegisterd) {
      dispatch(loginAccount(dataForm, history))
      setVerify(true)
    } else {
      dispatch(createAccount(dataForm, history));
    }

  }

  const switchMode = (e) => {
    e.preventDefault()
    setIsRegisterd(isRegisterd => !isRegisterd)
  }

  return (
    <div className="form_container_auth">
      <form onSubmit={ handleSubmit } >
        <h2> {isRegisterd ? 'LOGIN' : 'REGISTER'}</h2>
        { 
          !isRegisterd && (
            <div className="form-item">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={dataForm.name} onChange={(e) => setDataForm({...dataForm, name: e.target.value}) } />
            </div>
          )
        }
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={dataForm.email} onChange={(e) => setDataForm({...dataForm, email: e.target.value})} required/>
        </div>

        <div className="form-item">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" autoComplete="on" value={dataForm.password} onChange={(e) => setDataForm({...dataForm, password: e.target.value})} required/>
        </div>

        <div className="container_form_button">
          {
            verify ? <ClipLoader /> : <input type="submit" value={isRegisterd ? 'Login' : 'Register'} />
          }
          <input type="button"  onClick={ switchMode } value={ isRegisterd ? 'Not registerd ? Sign-up' : 'Already signup? Log-in' } />
        </div>
      </form>
    </div>
  )
}

export default FormAuth
