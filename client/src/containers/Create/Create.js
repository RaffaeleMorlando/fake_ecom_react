import React from 'react'
import { useHistory } from 'react-router-dom';
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header.js';

const Create = () => {

  const history = useHistory();
  
  return (
    <>
      <Header />
      <button onClick={() => {history.push('/')}}>Back</button>
      <Form />
    </>
  )
}

export default Create;
