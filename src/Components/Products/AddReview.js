import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const handleReview = e => {
        e.preventDefault();
        const rating = e.target.rating.value;
        console.log(rating);

    }
    return (
        <div>
            <h1>{ user.displayName }</h1>
            <form className="flex flex-row" onSubmit={ handleReview }>
                <div className="flex flex-col gap-3 border border-collapse p-5">
                    <label>
                        <span class="peer-invalid:text-red-500 ...">Give Us Rating Please</span>
                    </label>
                    <div class="rating" name="review">
                        <input type="radio" name="rating" value="1" class="mask mask-star" />
                        <input type="radio" name="rating" value="2" class="mask mask-star" />
                        <input type="radio" name="rating" value="3" class="mask mask-star" />
                        <input type="radio" name="rating" value="4" class="mask mask-star" />
                        <input type="radio" name="rating" value="5" class="mask mask-star" />
                    </div>
                    <textarea name="comment" n class="textarea textarea-primary" placeholder="Comment Here"></textarea>
                    <input type="submit" class="btn btn-primary" value="Add Review" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;