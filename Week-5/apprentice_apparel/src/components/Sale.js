import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FloatingLabel, Figure, } from 'react-bootstrap';
import{Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import './Admin.css'
import UpdateItem from './UpdateItem';

class Sale extends Component {
    constructor(props){
        super(props);
        this.state = {
            sales: []
        }

    }
    componentDidMount = () => {
        axios.get("http://localhost:3000/aa/items/sale")
        .then(response => {
            this.setState({sales: response.data.saleItems})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <><div className="admin-header">Items on Sale</div>
            <div className="adminView-container">

                {this.state.sales.map(item => {
                    return <div key={item.id} className="image-container">
                        <Link className="imageLink" to={`/adminView/${item.id}`}>
                        <img src={item.image} className="image" />
                        </Link>
                        <p class="title">{item.title}</p>
                        <p class="description">{item.description}</p>
                        <p class="price">${item.price} </p>
                        <p class="sale"p>Sale: {item.sale} </p>
                        <Button className="button" >Add to Cart</Button>

                    </div>;
                })}
            </div></>
        );
    }
}    
export default Sale;
