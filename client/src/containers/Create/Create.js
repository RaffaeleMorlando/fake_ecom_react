import React from 'react'
import { useHistory } from 'react-router-dom';
import Form from '../../components/Form/Form';

const Create = () => {

  const history = useHistory();
  
  return (
    <>
      <h1>CREATE PAGE</h1>
      <button onClick={() => {history.push('/')}}>Back</button>
      <Form />
    </>
  )
}

export default Create;
