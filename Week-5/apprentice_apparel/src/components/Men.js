import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import{ Link } from 'react-router-dom';

import './Womens.css';

class Men extends Component {
    constructor(props){
        super(props);
        this.state = {
            mens: []
        }
    }

    componentDidMount = () => {
        axios.get("http://localhost:3000/aa/items/mens")
        .then(response => {
            let data = []
            for(let i = 0; i<response.data.mens.length; i++){
                data.push(response.data.mens[i])
            }
            this.setState({mens: data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <div className="womensClothing-container">
                <h1 className="womens-header">Men's Clothing</h1>
                {this.state.mens.map(men => {
                    return <div key = {men.id} className="image-p-container">
                             <Link className="imageLink" to={`/mens/${men.id}`}> 
                             <img src={men.image} />
                             </Link>
                             <p>{men.title}</p>
                             <p>{men.descripton}</p>
                             <p>${men.price} </p>
                             <Button className="button" >Add to Cart</Button> 
                             
                          </div>
                })} 
            </div>
        );
    }
}    

export default Men;
