import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';
const Product = ({ product }) => {
    const { _id, Name, image, price, QuantityAvailable } = product;
    const navigate = useNavigate();
    const navigateWatchDetails = _id => {
        navigate(`/purchase/${_id}`);
    }
    return (
        <div class="card w-96 bg-base-100 shadow-2xl ">
            <figure className="hover-rotate"><img className="h-48" src={ image } alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{ Name }!</h2>
                <p>{ price } BDT.</p>
                <p><small>Available: { QuantityAvailable }</small></p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary btn-outline">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;