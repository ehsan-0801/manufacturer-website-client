import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const Purchase = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [active, setActive] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, []);
    const onChange = data => {
        console.log(data);
    }
    const handleOrder = (event) => {
        event.preventDefault();
        console.log(handleOrder);
        const name = user.displayName;
        const uid = user.uid;
        const email = user.email;
        const productName = product.Name;
        const OrderQuantity = parseInt(event.target.orderQuantity.value);
        const TotalPrice = parseInt(event.target.orderQuantity.value) * parseInt(product.price);
        const Address = event.target.Address.value;
        const Phone = event.target.Phone.value;
        const Information = event.target.Information.value;
        const status = 'unpaid'
        let newOrder = {
            userName: name,
            userEmail: email,
            userId: uid,
            productName,
            OrderQuantity,
            TotalPrice,
            Address,
            Phone,
            Information,
            status
        }
        console.log(newOrder);
        // const url = ;
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Order Placed successfully`)
                    navigate(`/dashboard/myorders`);
                    event.target.reset()
                }
                else {
                    toast.error(`There is a error in input`)
                }
            });
    }


    return (
        <div>
            <ToastContainer />
            <div className="hero min-h-screen bg-base-100 border border-secondary">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <img src={ product.image } className="w-48 lg:w-96 rounded-lg shadow-2xl" />
                    <div>
                        <table className="border-collapse border border-primary">

                            <tbody>
                                <tr>
                                    <td className="border border-primary">Name:</td>
                                    <td className="border border-primary">{ product.Name }</td>
                                </tr>
                                <tr>
                                    <td className="border border-primary">About This Product:</td>
                                    <td className="border border-primary">{ product.Description }</td>
                                </tr>
                                <tr>
                                    <td className="border border-primary">Price</td>
                                    <td className="border border-primary">{ product.price } BDT.</td>
                                </tr>
                                <tr>
                                    <td className="border border-primary">Available Quantity</td>
                                    <td className="border border-primary">{ product.QuantityAvailable } pieces</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="border border-primary">
                            <h1 className="text-xl text-center"> <span className="text-primary font-bold"> Name: </span>{ user.displayName }</h1>
                            <h1 className="text-xl text-center"><span className="text-primary font-bold"> Email: </span>{ user.email }</h1>
                            <form onChange={ handleSubmit(onChange) } onSubmit={ (handleOrder) }>

                                <div>

                                    <div className="flex gap-4 my-4 w-48 lg:w-full">
                                        <label className="label">
                                            <span className="label-text">Quantity</span>
                                        </label>
                                        <input className="input input-bordered" type="number" { ...register("orderQuantity",
                                            {
                                                min: {
                                                    value: product.QuantityMinimum + 1,
                                                    message: `Minimum Order Quantity is ${product.QuantityMinimum}`
                                                },
                                                max: {
                                                    value: product.QuantityAvailable - 1,
                                                    message: `Maximum order Quantity is ${product.QuantityAvailable}`
                                                }
                                            }) } />
                                        <label className="label">
                                            { errors.orderQuantity?.type === 'min' && <span className="label-text-alt text-red-500">{ errors.orderQuantity.message }</span> }
                                            { errors.orderQuantity?.type === 'max' && <span className="label-text-alt text-red-500">{ errors.orderQuantity.message }</span> }
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-5 mb-4">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <input type="text" placeholder="Address of Shipment" className="input input-bordered"
                                            { ...register("Address", {
                                                required: {
                                                    value: true,
                                                    message: 'Address of Shipment is Required'
                                                },
                                            }) }
                                        />
                                        <label className="label">
                                            { errors.Address?.type === 'required' && <span className="label-text-alt text-red-500">{ errors.Address.message }</span> }
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-8 mb-4">
                                        <label className="label">
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input type="text" placeholder="Phone Number" className="input input-bordered"
                                            { ...register("Phone", {
                                                required: {
                                                    value: true,
                                                    message: 'Please input a Phone number htmlFor contact'
                                                },
                                            }) }
                                        />
                                        <label className="label">
                                            { errors.Phone?.type === 'required' && <span className="label-text-alt text-red-500">{ errors.Phone.message }</span> }
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-1 mb-4">
                                        <label className="label">
                                            <span className="label-text">Information</span>
                                        </label>
                                        <textarea className="textarea textarea-bordered lg:w-full" placeholder="additional requirements" { ...register("Information", {
                                        }) }></textarea>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-primary" disabled={ errors.orderQuantity?.type === 'min' || errors.orderQuantity?.type === 'max' }>Order</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;