"use client"

import React from 'react'
import { products } from "../app/data"
import { useDispatch } from 'react-redux'
import { addItem } from '@/actions/cartAction'

const Product = () => {
    const dispatch = useDispatch()

    const handleAddCart = (product) => {
        dispatch(addItem(product))
    }

    return (<>
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Product</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {products.map((product) => {
                return (
                    <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '20px', margin: '10px', textAlign: 'center', width: '200px' }}>
                        <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                        <h2 style={{ fontSize: '1.2em', margin: '10px 0' }}>{product.title}</h2>
                        <p style={{ color: '#888', margin: '10px 0' }}>₹{product.price}</p>
                        <button onClick={() => handleAddCart(product)} style={{ padding: '10px 20px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                            Add to Cart
                        </button>
                    </div>
                );
            })}
        </div>


    </>
    )
}

export default Product
