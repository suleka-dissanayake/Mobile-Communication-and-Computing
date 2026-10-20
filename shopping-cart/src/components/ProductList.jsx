import React from 'react';
import ProductCard from './ProductCard.jsx';

export default class ProductList extends React.Component {
    render() {
        const { products } = this.props;

        return (
            <div className="product-list-section">
                <h2 className="section-title">PRODUCTS</h2>

                {products.length === 0 ? (
                    <p className="empty-message">No products added yet.</p>
                ) : (
                    <div className="product-grid">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                quantity={product.quantity}
                                status={product.status}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}