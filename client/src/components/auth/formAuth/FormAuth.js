import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount, loginAccount, resetErrorForm } from '../../../actions/auth.js';
import { useHistory, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './FormAuth.scss';


const FormAuth = () => {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const dataForm = {email: '', password: ''};
  const pathName = useLocation().pathname;
  const history = useHistory();

 
  const onSubmit = () => {
    if(pathName === '/login') {
      console.log('LOGIN');
      dispatch(loginAccount(formik.values, history))
    } else {
      console.log('REGISTER');
      dispatch(createAccount(formik.values, history));
    }
  }
  
  const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  
  const formik = useFormik({
      initialValues: pathName === '/login' ? dataForm : {...dataForm, name: ''},
      validateOnBlur: true,
      onSubmit,
      validationSchema: yup.object({
        ...(pathName === '/register' ? {name: yup.string().min(3,"Please enter your real name").required()} : null),
        email: yup.string().email("Please enter a valid email address").required(),
        password: yup.string().matches(REGEX_PASSWORD,'Please enter a strong password').required()
      })
  });
    
  const switchMode = () => {
    dispatch(resetErrorForm())
    
    if(pathName === '/login') {
      history.push('/register')
      
    } else {
      history.push('/login')
    }
  }

  return (
    <div className="form_container_auth">
      <form onSubmit={ formik.handleSubmit } >
        <h2> {pathName === '/login' ? 'LOGIN' : 'REGISTER'}</h2>
        {auth.error && (<p className="login_error">{auth.error}</p>)}
        { 
          pathName === '/register' && (
            <div className="form-item">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} placeholder="Enter Name"/>
              {
                (formik.touched && formik.errors.name) && (<p className="field_error">{formik.errors.name}</p>)
              }
            </div>
          )
        }
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Enter Email" />
          {
            (formik.touched && formik.errors.email) && (<p className="field_error">{formik.errors.email}</p>)
          }
        </div>

        <div className="form-item">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" autoComplete="on" value={formik.values.password} onChange={formik.handleChange} placeholder="Enter Password" />
          {
            (formik.touched && formik.errors.password) && (<p className="field_error">{formik.errors.password}</p>)
          }
        </div>

        <div className="container_form_button">
          {
            auth.isLoading ? <ClipLoader /> : <input type="submit" value={pathName === '/login' ? 'Login' : 'Register'} />
          }
          <input type="button"  onClick={ switchMode } value={ pathName === '/login' ? 'Not registerd ? Sign-up' : 'Already signup? Log-in' } />
        </div>

      </form>
    </div>
  )
}

export default FormAuth
