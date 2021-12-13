import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import{ Link } from 'react-router-dom';

import './Womens.css';

class Electronics extends Component {
    constructor(props){
        super(props);
        this.state = {
            electronics: []
        }

    }
    componentDidMount = () => {
        axios.get("/electronics")
        .then(response => {
            console.log("response", response)
            let data = []
            for(let i = 0; i<response.data.electronics.length; i++){
                data.push(response.data.electronics[i])
            }

            console.log("data", data)
            this.setState({electronics: data})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <div className="womensClothing-container">
                <h1 className="womens-header">Electronics</h1>

                {this.state.electronics.map(electronic => {
                    return <div key = {electronic.id} className="image-p-container">
                            <Link className="imageLink" to={`/aa/electronics/${electronic.id}`}> 
                             <img src={electronic.image} />
                             </Link>
                             <p>{electronic.title}</p>
                             <p>{electronic.descripton}</p>
                             <p>${electronic.price} </p>
                             <Button className="button" >Add to Cart</Button>  
                          </div>
                })}
                
            </div>
        );
    }
}    

export default Electronics;
