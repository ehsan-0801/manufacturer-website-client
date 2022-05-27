import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Feedback = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/feedback`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('Feedback Sent')
                console.log(result);
            })
    };
    return (
        <div className="px-36">
            <h1 className="text-center text-primary text-4xl font-bold">You can Send us Your Opinion and you do not need to be a user for it</h1>
            <div>
                <form className='w-96' onSubmit={ handleSubmit(onSubmit) }>
                    <input className='mb-2 input input-bordered w-full' placeholder='email' { ...register("email") } />
                    <br />
                    <textarea className='mb-2 input input-bordered w-full' placeholder='Send Us Your Feedback' { ...register("feedback") } />
                    <br />
                    <input type="submit" className="btn btn-primary" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Feedback;