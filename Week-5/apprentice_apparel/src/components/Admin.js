import React, { Component } from 'react';
import { Button, Container, Row, Col, Form, FloatingLabel, Figure, } from 'react-bootstrap';
import{Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import './Admin.css'
import UpdateItem from './UpdateItem';

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            allItems: []
        }

    }
    componentDidMount = () => {
        axios.get("http://localhost:3000/aa/admin/adminView")
        .then(response => {
            this.setState({allItems: response.data.allItems});
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        console.log("props output", this.props)
        return (
            <><div className="admin-header">Admin View</div>
            <div className="adminView-container">

                {this.state.allItems.map(item => {
                    return <div key={item.id} className="image-container">
                        <Link className="imageLink" to={`/adminView/${item.id}`}>
                        <img src={item.image} className="image" />
                        </Link>
                        <p class="title">{item.title}</p>
                        <p class="description">{item.description}</p>
                        <p class="price">${item.price} </p>
                        <p class="sale"p>Sale: {item.sale} </p>

                    </div>;
                })}
                {/* {this.state.allItems.map(item => {
        return <figure class = "item" >
            <img scr = {item.image}/>
        <figcaption class = "title">{item.title}</figcaption>
        <figcaption class = "description">{item.description}</figcaption>
        <figcaption class = "price">${item.price}</figcaption>
        <figcaption class = "sale">${item.sale}</figcaption>
        <Button className="button" >Update</Button>
        </figure>
    })} */}

            </div></>
        );
    }
}    
export default Admin;