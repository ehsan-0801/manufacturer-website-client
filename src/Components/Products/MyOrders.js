import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user])
    return (
        <div>
            <h2>My Orders: { orders.length }</h2>
            <h2>Your Name: { user.displayName }</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Ordered Item</th>
                            <th>Ordered Quantity</th>
                            <th>Adress</th>
                            <th>Phone Number</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={ order._id }>
                                <th>{ index + 1 }</th>
                                <td>{ order.productName }</td>
                                <td>{ order.OrderQuantity }</td>
                                <td>{ order.Address }</td>
                                <td>{ order.Phone }</td>
                                <td>
                                    <button className='btn btn-xs btn-primary'>Cancel</button>
                                </td>
                                <td>
                                    <button className='btn btn-xs btn-accent'>pay</button>
                                </td>
                                {/* <td>
                                    { (order.price && !order.paid) && <Link to={ `/dashboard/payment/${order._id}` }><button className='btn btn-xs btn-success'>pay</button></Link> }
                                    { (order.price && order.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{ order.transactionId }</span></p>
                                    </div> }
                                </td> */}
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;