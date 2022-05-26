import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageProduct.css';
const ManageProduct = ({ product }) => {
    const { _id, Name, image, price, QuantityAvailable } = product;
    const navigate = useNavigate();
    const navigateProductDetails = _id => {
        navigate(`/purchase/${_id}`);
    }
    return (
        <div class="card w-52 bg-base-100 shadow-2xl ">
            <figure className="hover-rotate1"><img className="h-36" src={ image } alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{ Name }!</h2>
                <p>{ price } BDT.</p>
                <p><small>Available: { QuantityAvailable }</small></p>
                <div class="card-actions justify-start">
                    <button onClick={ () => navigateProductDetails(_id) } class="btn btn-primary btn-outline">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;