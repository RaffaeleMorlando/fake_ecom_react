import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAccount, loginAccount } from '../../../actions/auth.js';
import './FormAuth.scss';
import { useHistory } from 'react-router-dom';

const FormAuth = () => {

  const [dataForm, setDataForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isRegisterd, setIsRegisterd] = useState(false);


  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isRegisterd) {
      dispatch(loginAccount(dataForm, history))
    } else {
      dispatch(createAccount(dataForm, history));
    }

  }

  const switchMode = (e) => {
    e.preventDefault()
    setIsRegisterd(isRegisterd => !isRegisterd)
  }

  return (
    <form onSubmit={ handleSubmit } >
      <h2> {isRegisterd ? 'LOGIN' : 'REGISTER'}</h2>
      { !isRegisterd && (
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={dataForm.name} onChange={(e) => setDataForm({...dataForm, name: e.target.value}) } />
          </div>
        )
      }
      <div className="form-item">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={dataForm.email} onChange={(e) => setDataForm({...dataForm, email: e.target.value})} />
      </div>
      <div className="form-item">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={dataForm.password} onChange={(e) => setDataForm({...dataForm, password: e.target.value})} />
      </div>
      <div>
        <input type="submit" value={isRegisterd ? 'Login' : 'Register'} />
        <button onClick={ switchMode }>{ isRegisterd ? 'Not registerd ? Sign-up' : 'Already signup? Log-in' }</button>
      </div>
    </form>
  )
}

export default FormAuth
