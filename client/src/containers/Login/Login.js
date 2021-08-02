import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Form from '../../components/Auth/FormAuth/FormAuth.js';
import Header from '../../components/Header/Header.js';

const Login = () => {

    const {userInfo} = useSelector(state => state.auth);
    const history = useHistory();

    useEffect(() => {
        if(userInfo) history.push('/');
    }, [history,userInfo]);

    return (
        <>
            {/* <Header /> */}
            <Form />
        </>
    )
}

export default Login;
