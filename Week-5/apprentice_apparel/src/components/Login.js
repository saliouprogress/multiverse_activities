import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col, Link, Form, FloatingLabel } from 'react-bootstrap';
import axios from 'axios';
import Logo from '../../public/Logo.png'

const  Login = () =>  {
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');

    const navigate = useNavigate();

    //use this function when you submit your form!
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = {
            email:      email,
            password:   password,
        }       
        axios.get('/login', form)
        .then(response => {
            console.log("Status: ", response.status);
            console.log("Data: ", response.data);
            redirect(response.data);
        }).catch(error => {
            console.error('Something went wrong!', error);
        });
    }

    const redirect = (response) => {
        if (response.newUser) {
            console.log("New User",response)
            navigate('/signup')
        } 
        if (!response.existUser.password) {
            console.log("Incorrect Password",response)
            navigate('/login')
        } else if (response.existUser.admin) {
            console.log("You have admin rights",response)
            navigate('/adminView')
        }
            console.log("Valid Login",response)
            navigate('/')
    }
    return (
        <Container className="contact-wrapper">
                <Form  onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="emailInput"
                        label="Email Address"
                        className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="passwordinput"
                        label="Password"
                        className="mb-3">
                        <Form.Control type="password" placeholder="current-passowrd" onChange={e=>setPassword(e.target.value)}/>
                    </FloatingLabel>
                    <Button className="button" type="submit">
                        Submit
                    </Button>
                    <Button className="button" type="sibmit" >New User? Sign Up Here!</Button>
                </Form>
        </Container>
    )
}

export default Login;
