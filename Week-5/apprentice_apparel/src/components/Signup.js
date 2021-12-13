import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Container, Row, Col, Link, Form, FloatingLabel } from 'react-bootstrap';
import axios from 'axios';
import Logo from '../../public/Logo.png';

const  Signup = () =>  {

    const [name, setName]           = useState('');
    const [email, setEmail]         = useState('');
    const [password, setPassword]   = useState('');
    const [admin]                   = useState(0);
    const [response, setResponse]   = useState([]);

    const navigate = useNavigate();

    //use this function when you submit your form!
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = {
            name:       name,
            email:      email,
            password:   password,
            admin:      admin,
        }       
            axios.post('/signup', form)
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
            navigate('/')
        } 
        if (!response.existUser.password) {
            console.log("Incorrect passowrd",response)
            navigate('/login')
        } 
        if (response.existUser.admin) {
            console.log("You have admin rights.",response)
            navigate('/adminView')
        }        
    }
    return (
        <Container className="contact-wrapper">
                <Form  onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="nameInput"
                        label="Full Name"
                        className="mb-3">
                        <Form.Control type="name" placeholder="James Bond" onChange={e=>setName(e.target.value)}/>
                    </FloatingLabel>
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
                    <Button className="button" type="submit">
                        New User? Sign Up
                    </Button>
                </Form>
        </Container>
    )
}

export default Signup;
