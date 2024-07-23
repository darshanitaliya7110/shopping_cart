"use client"

import React from 'react'

const Cart = () => {

    const items = [
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 110,
            description:
                "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts ",
            price: 25,
            description:
                "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category: "men's clothing",
            image:
                "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        }]

    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    return (
        <div
            style={{
                maxWidth: '800px',
                margin: '20px auto',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}>

            <h2
                style={{
                    textAlign: 'center',
                    fontSize: '2em',
                    marginBottom: '20px',
                }}>Cart</h2>

            {items.length === 0 ? (
                <p
                    style={{
                        textAlign: 'center',
                        fontSize: '1.2em',
                        color: '#888',
                    }}>No items in cart</p>
            ) : (
                items.map((item) => (
                    <div key={item.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px 0',
                            borderBottom: '1px solid #ddd',
                        }}>
                        <h4
                            style={{
                                flex: '2',
                                fontSize: '1.2em',
                                margin: '0',
                            }}>{item.title}</h4>
                        <p
                            style={{
                                flex: '1',
                                fontSize: '1.2em',
                                color: '#555',
                                textAlign: 'center',
                            }}>{item.price}</p>
                        <button
                            style={{
                                flex: '1',
                                padding: '10px',
                                backgroundColor: '#ff6347',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                textAlign: 'center',
                            }} onClick={() => handleRemoveFromCart(item.id)}>
                            Remove
                        </button>
                    </div>
                ))
            )}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0',
                    borderTop: '1px solid #ddd',
                    marginTop: '20px',
                }}>
                <h4
                    style={{
                        fontSize: '1.2em',
                        margin: '0',
                    }}>Total Price:</h4>
                <p
                    style={{
                        fontSize: '1.2em',
                        color: '#555',
                        textAlign: 'center',
                    }}>{totalPrice}</p>
            </div>
        </div >
    )
}


export default Cart
