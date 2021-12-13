import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Form, FloatingLabel } from 'react-bootstrap';
import axios from 'axios';

import Logo from '../../public/Logo.png';
import Denille from '../../public/Denille.jpg';
import Cesar from '../../public/Cesar.jpg';

import './Contact.css';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const github = (name) => {
        const url = `https:/github.com/${name}`;
        window.open(url, '_blank');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = {
            name: name,
            email: email,
            phone: phone,
            message: message
        }
        console.log('myForm: ', form)
        axios.post('/aa/users/contactus', {
            contactForm: form
        })
    }

    return (
        <Container className="contact-wrapper">
            <Row>
                <Col><h1 className="contact-header">About Apprentice Apparel</h1></Col>
            </Row>
            <Row>
            <Col>
                <Row>
                    <Col><h3 className="contact-header">The Team</h3></Col>
                </Row>
                <Row className="justify-content-md-center">
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='profile-pic' variant="top" src={Logo} atl="Logo" />
                        <Card.Body>
                            <Card.Title>Serge Nikiema</Card.Title>
                            <Card.Subtitle className="text-muted">Software Engineer</Card.Subtitle>
                        </Card.Body>
                        <Button className="github" onClick={()=>github('sergethi')}>GitHub</Button>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='profile-pic' variant="top" src={Logo} atl="Logo" />
                        <Card.Body>
                            <Card.Title>Mamadou Diallo</Card.Title>
                            <Card.Subtitle className="text-muted">Software Engineer</Card.Subtitle>
                        </Card.Body>
                        <Button className="github" onClick={()=>github('saliouprogress')}>GitHub</Button>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='profile-pic' variant="top" 
                                src={Denille} atl="Image of the developer, Denille" />
                        <Card.Body>
                            <Card.Title>Denille Carrington</Card.Title>
                            <Card.Subtitle className="text-muted">Software Engineer</Card.Subtitle>
                        </Card.Body>
                        <Button className="github" onClick={()=>github('CDenille')}>GitHub</Button>
                    </Card>
                </Col>
                <Col md="auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img className='profile-pic' variant="top" 
                                src={Cesar} atl="Image of the developer, Cesar" />
                        <Card.Body>
                            <Card.Title>Cesar Nina</Card.Title>
                            <Card.Subtitle className="text-muted">Software Engineer</Card.Subtitle>
                        </Card.Body>
                        <Button className="github" onClick={()=>github('cesarsnina')}>GitHub</Button>
                    </Card>
                </Col>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Col><h3 className="contact-header">Contact us here</h3></Col>
                </Row>
                <Row>
                <Col>
                <Form  onClick={handleSubmit}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Full name"
                        className="mb-3">
                        <Form.Control type="name" placeholder="James Bond" onChange={e=>setName(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3">
                        <Form.Control type="email" placeholder="name@example.com" onChange={e=>setEmail(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Phone number"
                        className="mb-3">
                        <Form.Control type="phone number" placeholder="555-555-5555" onChange={e=>setPhone(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Message" className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                            onChange={e=>setMessage(e.target.value)}/>
                    </FloatingLabel>
                    <Button className="contact-submit" type="submit">
                        Submit
                    </Button>
                </Form>
                </Col>
                </Row>
            </Col>
            </Row>
        </Container>
    )
}

export default Contact;
