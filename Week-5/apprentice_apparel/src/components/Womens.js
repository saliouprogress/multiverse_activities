import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'

import './Womens.css'

class Womens extends Component {
    constructor(props){
        super(props);
        this.state = {
            womens: []
        }

    }

    componentDidMount = () => {
        axios.get("http://localhost:3000/aa/items/womens")
        .then(response => {
            let data = []
            for(let i = 0; i<response.data.womens.length; i++){
                data.push(response.data.womens[i])
            }
            this.setState({womens: data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <div className="womensClothing-container">
                <h1 className="womens-header">Women's Clothing</h1>
                {this.state.womens.map(women => {
                    return <div key = {women.id} className="image-p-container"> 
                        
                            <Link to = {`/aa/womens/${women.id}`}>
                             <img src={women.image} />
                             </Link>
                             <p>{women.title} </p>
                             <p>{women.descripton}</p>
                             <p>${women.price} </p>
                             <Button className="button" >Add to Cart</Button>
                             
                          </div>
                })}
            </div>
        )
    }
}

export default Womens;
