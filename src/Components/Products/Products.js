import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Loading';
import Product from './Product';

const Products = () => {
    const { data: products, isLoading, refetch } = useQuery(['products'], () => fetch(`http://localhost:5000/products`)
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='my-10'>
            <h4 className='text-2xl text-primary text-center my-12 font-bold'>PRODUCTS</h4>
            <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1200"
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-24'>
                {
                    products.map(product => <Product
                        key={ product._id }
                        product={ product }
                    // setTreatment={ setTreatment }
                    ></Product>).slice(0, 6)
                }
            </div>
            {/* { treatment && <BookingModal
                date={ date }
                treatment={ treatment }
                setTreatment={ setTreatment }
                refetch={ refetch }
            ></BookingModal> } */}
        </div>
    );
};

export default Products;