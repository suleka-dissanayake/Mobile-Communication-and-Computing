import React, { useState } from 'react';

export default function ProductForm(props) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('1');
    const [status, setStatus] = useState('IN CART');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!id.trim() || !name.trim() || !price) {
            alert('Please fill in Product ID, Product Name, and Price.');
            return;
        }

        if (Number(price) <= 0 || Number(quantity) < 1) {
            alert('Price must be greater than 0 and quantity at least 1.');
            return;
        }

        const newProduct = {
            id: id.trim(),
            name: name.trim(),
            price: Number(price),
            quantity: Number(quantity),
            status: status,
        };

        props.onAddProduct(newProduct);

        setId('');
        setName('');
        setPrice('');
        setQuantity('1');
        setStatus('IN CART');
    };

    return (
        <div className="form-section">
            <h2 className="section-title">ADD NEW PRODUCT</h2>
            <form className="product-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    min="0"
                    placeholder="Price (Rs.)"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="number"
                    min="1"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="IN CART">IN CART</option>
                    <option value="SAVED">SAVED</option>
                </select>
                <button type="submit" className="add-btn">+ ADD PRODUCT</button>
            </form>
        </div>
    );
}
