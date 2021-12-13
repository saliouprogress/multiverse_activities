import React, { Component, useState, useEffect } from 'react';
import { Card, Button, Container, Label, Form, FloatingLabel} from 'react-bootstrap';
import axios from 'axios'
import './UpdateItem.css'
import{Link, useParams} from 'react-router-dom';

// const submit = (event) => {
//     event.preventDefault();
//     const form = {
//         title: title,
//         description: description,
//         price: price,
//         onSale: onSale
//     }
//     console.log('myForm: ', updateForm)
//     axios.put('/aa/updateSubmit', {
//         updateForm: form
//     })
// }

function MenSingleView(props) {
    const {id} = useParams()
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchCart();
}, [id]);

    const fetchCart = async () => {
    // const {id} = await props.match.params;
    console.log("This is my id", {id})
    const { data } = await axios.get(`/mens/${id}`);
    console.log(data)
    setItems(data);
}
    console.log(items)
    if (!items) {
        return <h4>Loading...</h4>
    }else {
        console.log("My item", items)

    
    return (
        <div className = "container2">
            <img src={items.image}/>
            <p>{items.title}</p>
            <p>{items.description}</p>
            <p>${items.price}</p>
           
        </div>

    )
}
}





    
export default MenSingleView;