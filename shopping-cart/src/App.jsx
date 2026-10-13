import React from 'react';
import { useState } from 'react';
import ProductForm from './components/ProductForm.jsx';
import ProductList from './components/ProductList.jsx';
import './App.css';

function App() {
    const [products, setProducts] = useState([
        { id: 'P001', name: 'Wireless Mouse', price: 2500, quantity: 2, status: 'IN CART' },
        { id: 'P002', name: 'Mechanical Keyboard', price: 12000, quantity: 1, status: 'IN CART' },
        { id: 'P003', name: 'USB-C Hub', price: 6500, quantity: 1, status: 'SAVED' },
    ]);

    const handleAddProduct = (newProduct) => {
        if (products.some((p) => p.id === newProduct.id)) {
            alert('Product ID already exists. Please use a different ID.');
            return;
        }
        setProducts([...products, newProduct]);
    };

    const cartTotal = products
        .filter((p) => p.status === 'IN CART')
        .reduce((sum, p) => sum + p.price * p.quantity, 0);

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>SHOPPING CART SYSTEM</h1>
                <p>React Practical Assessment</p>
            </header>

            <main className="app-main">
                <ProductForm onAddProduct={handleAddProduct} />
                <ProductList products={products} />

                <div className="cart-total">
                    <span>CART TOTAL</span>
                    <strong>Rs. {cartTotal.toLocaleString()}</strong>
                </div>
            </main>

            <footer className="app-footer">
                <p>2026 Shopping Cart</p>
            </footer>
        </div>
    );
}

export default App;
