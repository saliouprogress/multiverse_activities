import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import './Cart.css';


const Cart = () => {
    const [cart, setCart] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetchCart();
        sum();
    }, [cart]);

    const fetchCart = async () => {
        const { data } = await axios.get(`/aa/users/${id}/cart`);
        setCart(data.items);
    }

    const deleteCart = async (userId) => {
        await axios.delete(`/aa/users/${userId}/cart`);
        fetchCart();
    };
    
    const deleteItem = async (userId, itemId) => {
        await axios.delete(`/aa/users/${userId}/cart/${itemId}`);
        fetchCart();
    };

    const checkout = () => {
        alert('You have successfully checkout!');
    };

    const sum = () => {
        if (cart.length === 0) return 0;
        let totalSum = 0;
        cart.forEach(num => {
            totalSum += num[0].price;
        })
        return totalSum;
    };
    
    if (!cart) {
        return <h4>Your cart is currently empty</h4>
    } else {
        const total = sum();
    return (
        <div>
            <div>
                <h1 className='cart-header'>My Cart</h1>
                <Button className='empty-cart'
                        onClick={() => deleteCart(2)}>Empty Cart</Button>
            </div>
            <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th></th>
                    <th>#</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
                </thead>

                <tbody>
                    {
                        cart.map((ele, index) => {
                            const item = ele[0];
                            return (
                                <tr key={item.id}>
                                    <td><Button className='delete'
                                                onClick={() => deleteItem(2,item.id)}>Delete</Button></td>
                                    <td>{index + 1}</td>
                                    <td><img src={item.image}/></td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td className='cart-price'>{item.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            </div>
            <div>
                <h4 className="total">Total: {total}</h4>
                <Button className='place-order'
                    onClick={() => {deleteCart(2); checkout();}} >
                    Place Order</Button>
            </div>
        </div>
    )}
}

export default Cart;
