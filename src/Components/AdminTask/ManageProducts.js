import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Loading';
import ManageProduct from './ManageProduct';
const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery(['products'], () => fetch(`http://localhost:5000/products`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className=''>
                <h4 className='text-2xl text-primary text-center font-bold my-12'>PRODUCTS</h4>
                <div
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-duration="1200"
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-6 lg:mx-24'>
                    {
                        products.map(product => <ManageProduct
                            key={ product._id }
                            product={ product }
                        // setTreatment={ setTreatment }
                        ></ManageProduct>)
                    }
                </div>
                {/* { treatment && <BookingModal
                date={ date }
                treatment={ treatment }
                setTreatment={ setTreatment }
                refetch={ refetch }
            ></BookingModal> } */}
            </div>
        </div>
    );
};

export default ManageProducts;