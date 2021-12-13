import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import{ Link } from 'react-router-dom';

import './Womens.css';

class Jewelry extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount = () => {
        axios.get("http://localhost:3000/aa/items/jewelry")
        .then(response => {
            let data = []
            for(let i = 0; i<response.data.jewelry.length; i++){
                data.push(response.data.jewelry[i])
            }
            this.setState({list: data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <div className="womensClothing-container">
                <h1 className="womens-header">Jewelry</h1>
                {this.state.list.map(elem => {
                    return <div key = {elem.id} className="image-p-container">
                            <Link className="imageLink" to={`/aa/jewelry/${elem.id}`}> 
                             <img src={elem.image} />
                             </Link>
                             <p>{elem.title}</p>
                             <p>{elem.descripton}</p>
                             <p>${elem.price} </p>
                             <Button className="button" >Add to Cart</Button>  
                          </div>
                })}
            </div>
        );
    }
}    

export default Jewelry;
