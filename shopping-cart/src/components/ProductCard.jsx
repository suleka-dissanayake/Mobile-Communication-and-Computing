import React from 'react';

export default function ProductCard(props) {
    const { id, name, price, quantity, status } = props;
    const inCart = status === 'IN CART';

    return (
        <div className="product-card">
            <div className="product-card-header">
                <span className="product-id">{id}</span>
                <span className={`status-badge ${inCart ? 'badge-incart' : 'badge-saved'}`}>
                    {status}
                </span>
            </div>
            <h3 className="product-name">{name}</h3>
            <p className="product-price">Rs. {price.toLocaleString()} x {quantity}</p>
            <p className="product-subtotal">Subtotal: Rs. {(price * quantity).toLocaleString()}</p>
        </div>
    );
}