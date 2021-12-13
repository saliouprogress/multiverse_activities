import React, { Component, useState, useEffect } from 'react';
import { Card, Button, Container, Label, Form, FloatingLabel} from 'react-bootstrap';
import axios from 'axios'
import './UpdateItem.css'
import{Link, useParams} from 'react-router-dom';

//action to take when the form is submitted
//will update the item in the database
const submit = async (event) => {
    event.preventDefault();
    const form = {
        title: title,
        description: description,
        price: price,
        sale: sale
    }
    console.log('myForm: ', updateForm)
    await axios.put('/updateSubmit', {
         updateForm: form

    })
}

//when the admin clicks an image,
//they are sent to a single image view to make
function UpdateItem(props) {
    const {id} = useParams()
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItem();
}, [id]);

    const fetchItem = async () => {
    // const {id} = await props.match.params;
    console.log("This is my id", {id})
    const { data } = await axios.get(`/adminView/${id}`);
    setItems(data);
}

    if (!items) {
        return <h4>Loading...</h4>
    }else {
        console.log("My item", items)

    
        //returns the form to update the item
    return (
        <div className = "itemcontainer">
            <img src={items.image} className ="singleItemImage"/>
            <p></p>
            <Form  onClick={submit}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label={items.title} 
                        className="mb-3">
                        <Form.Control type="title" placeholder="title" onChange={e=>setTitle(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label={items.description} 
                        className="mb-3">
                        <Form.Control type="description" placeholder={items.description} onChange={e=>setDescription(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label={items.price} 
                        className="mb-3">
                        <Form.Control type="price" placeholder={items.price} onChange={e=>setPrice(e.target.value)}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="sale" className="mb-3">
                        <Form.Control
                            type="sale"
                            placeholder="sale"
                            onChange={e=>setSale(e.target.value)}/>
                    </FloatingLabel>
                    <Button className="updateButton" type="submit">
                        Submit
                    </Button>
                </Form>
        </div>

    )
    }
}


export default UpdateItem;