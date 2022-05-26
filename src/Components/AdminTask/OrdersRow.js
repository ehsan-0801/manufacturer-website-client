import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Loading';

const OrdersRow = ({ order }) => {
    let count = 0
    return (
        <tr>
            <td>{ order.userName }</td>
            <td>{ order.userEmail }</td>
            <td>{ order.productName }</td>
            <td>{ order.OrderQuantity }</td>
            <td>{ order.TotalPrice }</td>
            {/* <td>{ role !== 'admin' && <button onClick={ makeAdmin } class="btn btn-xs">Make Admin</button> }</td> */ }
            {/* <td><button class="btn btn-xs">Remove User</button></td> */ }
        </tr>
    );
};

export default OrdersRow;